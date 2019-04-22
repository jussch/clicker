/**
 * Created by Justin on 6/1/2018.
 */
import { List } from 'immutable';
import BattleReward from '../models/BattleReward';
import { selectPlayer } from '../selectors/PlayerSelectors';
import {
  selectEnemies,
  selectQueuedAction,
  selectBattleActive,
} from '../selectors/BattleSelectors';
import triggerAutoBattle from '../logic/triggerAutoBattle';
import hasOneTarget from '../logic/battle/hasOneTarget';
import getTargetIds from '../logic/battle/getTargetIds';
import {
  PREPARE_ACTION,
  INITIATE_ACTION,
  SELECT_TARGET,
  END_TURN,
  prepareAction,
  applyAction,
  endBattle,
} from '../actions/BattleActions';

const BATTLE_ACTIONS = new Set([
  PREPARE_ACTION,
  INITIATE_ACTION,
  SELECT_TARGET,
  END_TURN,
]);

export default function battleManager({ getState, dispatch }) {
  /**
   * The Main BattleManager Middleware
   */
  return next => (action) => {
    rerouteAction(action);
    const returnValue = next(action);
    checkIfBattleIsComplete();
    return returnValue;
  };

  /**
   * Compares the action and modifies it depending on the current state.
   * @param action
   * @returns {*}
   */
  function rerouteAction(action) {
    if (!BATTLE_ACTIONS.has(action.type)) return null;

    const state = getState();
    const player = selectPlayer(state);
    const queuedAction = selectQueuedAction(state);

    if (action.type === INITIATE_ACTION) {
      const { action: battleAction } = action.payload;
      if (!player.canUseAction(battleAction)) {
        return null;
      }

      if (hasOneTarget(battleAction, player, state)) {
        const targets = getTargetIds(battleAction, player, state);
        return executeBattleAction(battleAction, player, targets);
      }

      return dispatch(prepareAction({ action: battleAction }));
    } else if (action.type === PREPARE_ACTION) {

    } else if (action.type === SELECT_TARGET) {
      if (!queuedAction) return null;

      return executeBattleAction(queuedAction, player, new Set([action.payload.id]));
    } else if (action.type === END_TURN) {
      triggerAutoBattle({ getState, dispatch });
    }
  }

  /**
   * Check if battle is complete.
   * @returns {*}
   */
  function checkIfBattleIsComplete() {
    const state = getState();
    const enemies = selectEnemies(state);
    const battleIsActive = selectBattleActive(state);

    if (!battleIsActive || enemies.size === 0) return false;

    const everyEnemyIsDead = enemies.every(enemy => enemy.isDead());

    if (everyEnemyIsDead) {
      dispatch(endBattle({
        rewards: List([
          BattleReward.create({
            name: 'gold',
            quantity: 2000,
          }).setResourceReward()
        ]),
      }));
    }

    return everyEnemyIsDead;
  }

  function executeBattleAction(battleAction, user, targetIds) {
    return dispatch(applyAction({
      targetIds,
      user,
      action: battleAction,
    }));
  }
}

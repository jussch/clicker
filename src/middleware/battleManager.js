/**
 * Created by Justin on 6/1/2018.
 */
import { selectPlayer } from '../selectors/PlayerSelectors';
import { selectQueuedAction } from '../selectors/BattleSelectors';
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
} from '../actions/BattleActions';

const BATTLE_ACTIONS = new Set([
  PREPARE_ACTION,
  INITIATE_ACTION,
  SELECT_TARGET,
  END_TURN,
]);

export default function battleManager({ getState, dispatch }) {
  return next => (action) => {
    if (!BATTLE_ACTIONS.has(action.type)) return next(action);

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

    return next(action);
  };

  function executeBattleAction(battleAction, user, targetIds) {
    return dispatch(applyAction({
      targetIds,
      user,
      action: battleAction,
    }));
  }
}

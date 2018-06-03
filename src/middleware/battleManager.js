/**
 * Created by Justin on 6/1/2018.
 */
import hasOneTarget from '../logic/battle/hasOneTarget';
import {
  PREPARE_ACTION,
  INITIATE_ACTION,
  SELECT_TARGET,
  prepareAction,
  applyEffect,
} from '../actions/BattleActions';

const BATTLE_ACTIONS = new Set([
  PREPARE_ACTION,
  INITIATE_ACTION,
  SELECT_TARGET,
]);

export default function battleManager({ getState, dispatch }) {
  return next => (action) => {
    if (!BATTLE_ACTIONS.has(action.type)) return next(action);

    const state = getState();
    if (action.type === INITIATE_ACTION) {
      const { action: battleAction } = action.payload;
      if (hasOneTarget(battleAction, state)) {
        dispatch(applyEffect({
          action: battleAction,
        }))
      }

      return dispatch(prepareAction({ action: battleAction }));
    } else if (action.type === PREPARE_ACTION) {

    } else if (action.type === SELECT_TARGET) {

    }
  };
}

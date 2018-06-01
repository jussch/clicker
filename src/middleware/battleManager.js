/**
 * Created by Justin on 6/1/2018.
 */
import { PREPARE_ACTION, APPLY_EFFECT, SELECT_TARGET } from '../actions/BattleActions';

const BATTLE_ACTIONS = new Set([
  PREPARE_ACTION,
  APPLY_EFFECT,
  SELECT_TARGET,
]);

export default function battleManager({ getState, dispatch }) {
  return next => (action) => {
    if (!BATTLE_ACTIONS.has(action.type)) return next(action);

    const state = getState();
    if (action.type === PREPARE_ACTION) {

    } else if (action.type === APPLY_EFFECT) {

    } else if (action.type === SELECT_TARGET) {

    }
  };
}

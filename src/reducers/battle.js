/**
 * Created by Justin on May 15, 2018
*/
import { handleActions } from 'redux-actions';
import { Map, List } from 'immutable';
import {
  SETUP_BATTLE,
  PREPARE_ACTION,
  APPLY_EFFECT,
} from '../actions/BattleActions';

export const initialState = Map({
  allies: List(),
  enemies: List(),
  phase: null,
  isActive: false,
  queuedAction: null,
});

export default handleActions({
  [SETUP_BATTLE](state, action) {
    const { enemies, allies } = action.payload;
    return state
      .set('allies', allies)
      .set('enemies', enemies)
      .set('isActive', true);
  },

  [PREPARE_ACTION](state, action) {
    return state.set('queuedAction', action.payload.action);
  },

  [APPLY_EFFECT](state, action) {
    return state.set('queuedAction', null);
  },
}, initialState)

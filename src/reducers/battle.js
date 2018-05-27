/**
 * Created by Justin on May 15, 2018
*/
import { handleActions } from 'redux-actions';
import { Map, List } from 'immutable';
import { SETUP_BATTLE } from '../actions/BattleActions';

export const initialState = Map({
  allies: List(),
  enemies: List(),
  phase: null,
  isActive: false,
});

export default handleActions({
  [SETUP_BATTLE](state, action) {
    const { enemies, allies } = action.payload;
    return state
      .set('allies', allies)
      .set('enemies', enemies)
      .set('isActive', true);
  },
}, initialState)

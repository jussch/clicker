/**
 * Created by Justin on May 15, 2018
*/
import { handleActions } from 'redux-actions';
import { Map, List } from 'immutable';
import {
  SETUP_BATTLE,
  PREPARE_ACTION,
  APPLY_ACTION,
  END_BATTLE,
  TAKE_REWARD,
} from '../actions/BattleActions';

export const initialState = Map({
  allies: List(),
  enemies: List(),
  phase: null,
  isActive: false,
  queuedAction: null,
  rewards: null,
});

export default handleActions({
  [SETUP_BATTLE](state, action) {
    const { enemies, allies } = action.payload;
    return state
      .set('allies', allies)
      .set('enemies', enemies)
      .set('isActive', true);
  },

  [END_BATTLE](state, action) {
    const { rewards } = action.payload;

    return state
      .set('rewards', List(rewards))
      .set('isActive', false);
  },

  [PREPARE_ACTION](state, action) {
    return state.set('queuedAction', action.payload.action);
  },

  [APPLY_ACTION](state, action) {
    const { action: battleAction, user, targetIds } = action.payload;
    const effect = battleAction.generateEffect(user);

    return state
      .set('queuedAction', null)
      .update('enemies', enemies => enemies.map(enemy => {
        if (!targetIds.has(enemy.getId())) return enemy;

        return enemy.applyEffect(effect);
      }));
  },

  [TAKE_REWARD](state, action) {
    return state.deleteIn(['rewards', action.payload.index]);
  },
}, initialState)

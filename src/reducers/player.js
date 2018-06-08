/**
 * Created by Justin on May 15, 2018
*/
import { handleActions } from 'redux-actions';
import Player from '../models/Player';
import { UPDATE_PLAYER } from '../actions/PlayerActions';
import { APPLY_EFFECT } from '../actions/BattleActions';

export const initialState = Player.create({
  energy: 50,
});

export default handleActions({
  [UPDATE_PLAYER](state, action) {
    return state.merge(action.payload);
  },

  [APPLY_EFFECT](state, action) {
    const { action: battleAction, user, targetIds } = action.payload;

    let nextPlayer = state;
    if (targetIds.has(state.getId())) {
      nextPlayer = nextPlayer.applyEffect(battleAction.generateEffect(user));
    }

    if (user.getId() === nextPlayer.getId()) {
      nextPlayer = nextPlayer.applyCost(battleAction);
    }

    return nextPlayer;
  },
}, initialState)

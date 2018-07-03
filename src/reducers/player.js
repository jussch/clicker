/**
 * Created by Justin on May 15, 2018
*/
import { handleActions } from 'redux-actions';
import Player from '../models/Player';
import { UPDATE_PLAYER } from '../actions/PlayerActions';
import { APPLY_ACTION, SETUP_BATTLE } from '../actions/BattleActions';
import { START_TURN } from '../actions/BattleActions';

export const initialState = Player.create({
  energy: 50,
});

export default handleActions({
  [UPDATE_PLAYER](state, action) {
    return state.merge(action.payload);
  },

  [APPLY_ACTION](state, action) {
    const { action: battleAction, user, targetIds } = action.payload;

    let nextPlayer = state;
    if (targetIds.has(state.getId())) {
      nextPlayer = nextPlayer.applyEffect(battleAction.generateEffect(user));
    }

    if (user.getId() === nextPlayer.getId()) {
      nextPlayer = nextPlayer.applyCost(battleAction).addCombo();
    }

    return nextPlayer;
  },

  [START_TURN](state, action) {
    return state.updateStartOfTurn();
  },

  [SETUP_BATTLE](state) {
    return state.resetState();
  }
}, initialState)

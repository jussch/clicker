/**
 * Created by Justin on May 15, 2018
*/
import { handleActions } from 'redux-actions';
import Player from '../models/Player';
import { UPDATE_PLAYER } from '../actions/PlayerActions';

export const initialState = new Player({
  gold: 100,
});

export default handleActions({
  [UPDATE_PLAYER](state, action) {
    return state.merge(action.payload);
  },
}, initialState)

/**
 * Created by Justin on May 15, 2018
*/
import { updatePlayer } from '../actions/PlayerActions';
import { selectPlayer } from '../selectors/PlayerSelectors';

export default function runGame(store) {
  const { getState, dispatch } = store;
  
  setInterval(() => {
    const state = getState()
    const player = selectPlayer(state);
    dispatch(updatePlayer(player.update('gold', gold => gold + 1)));
  }, 1000);
}

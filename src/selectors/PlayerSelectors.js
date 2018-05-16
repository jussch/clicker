/**
 * Created by Justin on May 15, 2018
*/

export function selectPlayer(state) {
  return state.get('player');
}

export function selectPlayerGold(state) {
  return selectPlayer(state).get('gold');
}

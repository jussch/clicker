/**
 * Created by Justin on 5/30/2018.
 */

export function selectBattleState(state) {
  return state.get('battle');
}

export function selectEnemies(state) {
  return selectBattleState(state).get('enemies');
}

export function selectNumEnemies(state) {
  return selectEnemies(state).size;
}

export function selectEnemy(index) {
  return state => selectEnemies(state).get(index);
}

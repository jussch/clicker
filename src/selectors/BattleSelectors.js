/**
 * Created by Justin on 5/30/2018.
 */

export function selectBattleState(state) {
  return state.get('battle');
}

export function selectBattleActive(state) {
  return selectBattleState(state).get('isActive');
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

export function selectAllies(state) {
  return selectBattleState(state).get('allies');
}

export function selectNumAllies(state) {
  return selectAllies(state).size;
}

export function selectAlly(index) {
  return state => selectAllies(state).get(index);
}

export function selectQueuedAction(state) {
  return selectBattleState(state).get('queuedAction');
}

export function selectRewards(state) {
  return selectBattleState(state).get('rewards');
}

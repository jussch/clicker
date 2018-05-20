/**
 * Created by Justin-Desktop on 5/16/2018.
 */

export function selectResources(state) {
  return state.get('resources');
}

export function selectCurrentGold(state) {
  return selectResources(state).getIn(['gold', 'amount']);
}

export function selectGoldPerSecond(state) {
  return selectResources(state).getIn(['gold', 'perSecond']);
}

export function selectResource(resourceName) {
  return state => selectResources(state).get(resourceName);
}

export function selectResourceAmount(resourceName) {
  return state => selectResources(state).getIn([resourceName, 'amount']);
}

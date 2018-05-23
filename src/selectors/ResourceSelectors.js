/**
 * Created by Justin-Desktop on 5/16/2018.
 */
import isValidPurchase from '../utilities/resources/isValidPurchase';

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


/**
 * Selects if a cost can be registered.
 * @param cost
 * @returns {function(*=): *}
 */
export function selectIsValidCost(cost) {
  return state => isValidPurchase(cost, selectResources(state));
}

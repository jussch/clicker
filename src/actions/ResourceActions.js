/**
 * Created by Justin-Desktop on 5/16/2018.
 */
import { createAction } from 'redux-actions';

/**
 * Constants
 */
export const PROGRESS_RESOURCES = 'PROGRESS_RESOURCES';
export const UPDATE_RESOURCE = 'UPDATE_RESOURCE';
export const ADD_RESOURCE = 'ADD_RESOURCE';
export const SET_RESOURCE_RATES = 'SET_RESOURCE_RATES';

/**
 * Actions
 */
export const progressResources = createAction(PROGRESS_RESOURCES);
export const updateResource = createAction(UPDATE_RESOURCE);
export const addResource = createAction(ADD_RESOURCE);
export const setResourceRates = createAction(SET_RESOURCE_RATES);

/**
 * Combo Actions
 */
export function updateGold(resource) {
  return updateResource({ resource, type: 'gold' });
}

export function addGold(amount) {
  return addResource({ amount, type: 'gold' });
}

export function updateWood(resource) {
  return updateResource({ resource, type: 'wood' });
}

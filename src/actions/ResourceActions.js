/**
 * Created by Justin-Desktop on 5/16/2018.
 */
import { createAction } from 'redux-actions';

/**
 * Constants
 */
export const PROGRESS_RESOURCES = 'PROGRESS_RESOURCES';
export const UPDATE_RESOURCE = 'UPDATE_RESOURCE';

/**
 * Actions
 */
export const progressResources = createAction(PROGRESS_RESOURCES);
export const updateResource = createAction(UPDATE_RESOURCE);

/**
 * Combo Actions
 */
export function updateGold(resource) {
  return updateResource({ resource, type: 'gold' });
}

export function updateWood(resource) {
  return updateResource({ resource, type: 'wood' });
}

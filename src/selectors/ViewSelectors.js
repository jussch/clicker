/**
 * Created by Justin on April 14, 2019
 */
import { createSelector } from 'reselect';

export function selectOverlayActive(overlay) {
  return state => state.getIn(['view', 'activeOverlays']).has(overlay);
}

export function selectActiveOverlays(state) {
  return state.getIn(['view', 'activeOverlays']);
}

export function selectActivePanel(state) {
  return state.getIn(['view', 'activePanel']);
}

export const selectActiveOverlaysList = createSelector(
  selectActiveOverlays,
  (activeOverlays) => activeOverlays.toList(),
);

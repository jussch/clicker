/**
 * Created by Justin on April 14, 2019
 */

export function selectOverlayActive(overlay) {
  return state => state.getIn(['view', 'activeOverlays']).has(overlay);
}

export function selectActivePanel(state) {
  return state.getIn(['view', 'activePanel']);
}
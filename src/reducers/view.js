/**
 * Created by Justin on April 14, 2019
 */
import { handleActions } from 'redux-actions';
import { Map, Set } from 'immutable';
import { ALL_PANELS, ALL_OVERLAYS } from '../constants/ViewTypes';
import {
  CHANGE_ACTIVE_PANEL,
  TOGGLE_OVERLAY_MENU,
} from '../actions/ViewActions';

export const initialState = Map({
  activePanel: ALL_PANELS[0],
  activeOverlays: new Set(),
});

export default handleActions({
  [CHANGE_ACTIVE_PANEL](state, action) {
    const { panel } = action.payload;
    if (!ALL_PANELS.includes(panel)) return state;

    return state;
  },

  [TOGGLE_OVERLAY_MENU](state, action) {
    const { active, overlay } = action.payload;
    if (!ALL_OVERLAYS.includes(overlay)) return state;

    if (active == null) {
      return state.update('activeOverlays', overlays => (
        overlays.has(overlay) ? overlays.delete(overlay) : overlays.add(overlay)
      ));
    }

    return state.update('activeOverlays', overlays => (
      active ? overlays.add(overlay) : overlays.delete(overlay)
    ));
  },
}, initialState);
/**
 * Created by Justin on April 14, 2019
 */
import { createAction } from 'redux-actions';

export const CHANGE_ACTIVE_PANEL = 'CHANGE_ACTIVE_PANEL';
export const TOGGLE_OVERLAY_MENU = 'TOGGLE_OVERLAY_MENU';

export const changeActivePanel = createAction(CHANGE_ACTIVE_PANEL);
export const toggleOverlayMenu = createAction(TOGGLE_OVERLAY_MENU);

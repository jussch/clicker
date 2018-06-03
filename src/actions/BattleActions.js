/**
 * Created by Justin on 5/27/2018.
 */
import { createAction } from 'redux-actions';

/**
 * Constants
 */
export const SETUP_BATTLE = 'SETUP_BATTLE';
export const INITIATE_ACTION = 'INITIATE_ACTION';
export const PREPARE_ACTION = 'PREPARE_ACTION';
export const SELECT_TARGET = 'SELECT_TARGET';
export const APPLY_EFFECT = 'APPLY_EFFECT';

/**
 * Actions
 */
export const setupBattle = createAction(SETUP_BATTLE);
export const initiateAction = createAction(INITIATE_ACTION);
export const prepareAction = createAction(PREPARE_ACTION);
export const selectTarget = createAction(SELECT_TARGET);
export const applyEffect = createAction(APPLY_EFFECT);

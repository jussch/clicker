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
export const APPLY_ACTION = 'APPLY_ACTION';
export const END_TURN = 'END_TURN';
export const START_TURN = 'START_TURN';

/**
 * Actions
 */
export const setupBattle = createAction(SETUP_BATTLE);
export const initiateAction = createAction(INITIATE_ACTION);
export const prepareAction = createAction(PREPARE_ACTION);
export const selectTarget = createAction(SELECT_TARGET);
export const applyAction = createAction(APPLY_ACTION);
export const endTurn = createAction(END_TURN);
export const startTurn = createAction(START_TURN);

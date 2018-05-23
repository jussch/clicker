/**
 * Created by Justin on 5/22/2018.
 */
import { createAction } from 'redux-actions';

/**
 * Constants
 */
export const MAKE_TRANSACTION = 'MAKE_TRANSACTION';
export const COMPLETE_TRANSACTION = 'COMPLETE_TRANSACTION';

/**
 * Actions
 */
export const makeTransaction = createAction(MAKE_TRANSACTION);
export const completeTransaction = createAction(COMPLETE_TRANSACTION);

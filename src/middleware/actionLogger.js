/**
 * Created by Justin on 6/3/2018.
 */
import { PROGRESS_RESOURCES } from '../actions/ResourceActions';

const IGNORE_ACTIONS = new Set([
  PROGRESS_RESOURCES,
]);

export default function actionLogger({ getState, dispatch }) {
  return next => (action) => {
    if (!IGNORE_ACTIONS.has(action.type)) {
      console.log('%c<Store-Action>:', 'color: #9C27B0;', action);
    }

    return next(action);
  };
}


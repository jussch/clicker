/**
 * Created by Justin on 5/22/2018.
 */
import computeRate from '../logic/resources/computeRate';
import { setResourceRates } from '../actions/ResourceActions';

const ACTIVE_LISTENERS = [
  ['buildings'],
];

export default function recalculateResourceRate({ getState, dispatch }) {
  return next => (action) => {
    const preState = getState();
    const returnValue = next(action);
    const postState = getState();

    const changesWereMade = ACTIVE_LISTENERS.some(path => (
      preState.getIn(path) !== postState.getIn(path)
    ));

    if (changesWereMade) {
      dispatch(setResourceRates(computeRate(postState)));
    }

    return returnValue;
  };
}

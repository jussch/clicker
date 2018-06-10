/**
 * Created by Justin-Desktop on 5/16/2018.
 */
import createLoop from './utilities/createLoop';
import { progressResources } from '../actions/ResourceActions';

export default function incrementResources(store) {
  return createLoop((deltaTime) => {
    store.dispatch(progressResources(deltaTime));
  });
}

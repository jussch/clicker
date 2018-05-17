/**
 * Created by Justin-Desktop on 5/16/2018.
 */
import { progressResources } from '../actions/ResourceActions';

export default function incrementResources(store) {
  let cancelled = false;
  let startTime = Date.now();
  function tick() {
    const currentTime = Date.now();
    const deltaTime = (currentTime - startTime) / 1000;
    startTime = currentTime;

    store.dispatch(progressResources(deltaTime));
    if (!cancelled) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);

  return () => {
    cancelled = true;
  }
}

/**
 * Created by Justin on 6/10/2018.
 */
import createLoop from './createLoop';

export default function createIntervalLoop(func, loopTime) {
  let accumulatedTime = 0;
  return createLoop((deltaTime) => {
    accumulatedTime += deltaTime;
    while (accumulatedTime >= loopTime) {
      func(loopTime);
      accumulatedTime -= loopTime;
    }
  });
}

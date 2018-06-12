/**
 * Created by Justin on 6/11/2018.
 */
import createIntervalLoop from './utilities/createIntervalLoop'

const BATTLE_TIMER = 500;

export default function triggerAutoBattle({ getState, dispatch }) {
  const cancelAutoBattle = createIntervalLoop(() => {

  }, BATTLE_TIMER);
}

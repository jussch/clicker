/**
 * Created by Justin-Desktop on 5/15/2018.
 */
import runGame from '../logic/runGame';

let cachedMainStore = null;
export function getMainStore() {
  return cachedMainStore;
}

export function setMainStore(mainStore) {
  cachedMainStore = mainStore;
  runGame(mainStore);
}

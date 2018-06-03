/**
 * Created by Justin on 6/2/2018.
 */
import { selectNumEnemies, selectNumAllies } from '../../selectors/BattleSelectors';
import {
  TARGET_ALL_ALLIES,
  TARGET_ALL_ENEMIES,
  TARGET_ALLY,
  TARGET_ENEMY,
  TARGET_SELF,
} from '../../constants/BattleActions';

export default function hasOneTarget(battleAction, state) {
  const scope = battleAction.get('scope');

  if (
    scope === TARGET_ALL_ENEMIES ||
    scope === TARGET_ALL_ALLIES ||
    scope === TARGET_SELF
  ) {
    return true;
  } else if (scope === TARGET_ENEMY) {
    const numEnemies = selectNumEnemies(state);
    return numEnemies === 1;
  } else if (scope === TARGET_ALLY) {
    const numAllies = selectNumAllies(state);

    // numAllies does not include self.
    return numAllies === 0;
  }

  throw new RangeError(`Invalid battleAction scope: "${scope}".`);
}

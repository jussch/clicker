/**
 * Created by Justin on 6/2/2018.
 */
import {
  TARGET_ALL_ALLIES,
  TARGET_ALL_ENEMIES,
  TARGET_ALLY,
  TARGET_ENEMY,
  TARGET_SELF,
} from '../../constants/BattleActions';
import getTargetIds from './getTargetIds';

export default function hasOneTarget(battleAction, user, state) {
  const scope = battleAction.get('scope');

  if (
    scope === TARGET_ALL_ENEMIES ||
    scope === TARGET_ALL_ALLIES ||
    scope === TARGET_SELF
  ) {
    return true;
  } else if (scope === TARGET_ENEMY || scope === TARGET_ALLY) {
    const targets = getTargetIds(battleAction, user, state);
    return targets.size <= 1
  }

  throw new RangeError(`Invalid battleAction scope: "${scope}".`)
}

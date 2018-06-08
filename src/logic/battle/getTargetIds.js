/**
 * Created by Justin on 6/2/2018.
 */
import { List } from 'immutable';
import { selectPlayer } from '../../selectors/PlayerSelectors';
import { selectAllies, selectEnemies } from '../../selectors/BattleSelectors';
import { AFF_ENEMY, AFF_PLAYER } from '../../constants/BattleActions';
import {
  TARGET_ALL_ALLIES,
  TARGET_ALL_ENEMIES,
  TARGET_ALLY,
  TARGET_ENEMY,
  TARGET_SELF,
} from '../../constants/BattleActions';

export default function getTargetIds(battleAction, user, state) {
  const scope = battleAction.get('scope');
  const enemies = mapIds(selectEnemies(state));
  const allies = mapIds(selectAllies(state).push(selectPlayer(state)));

  const userAff = user.getAffiliation();
  let userFoes;
  let userAllies;
  if (userAff === AFF_ENEMY) {
    userFoes = allies;
    userAllies = enemies;
  } else if (userAff === AFF_PLAYER) {
    userFoes = enemies;
    userAllies = allies;
  } else {
    throw new RangeError(`Invalid affiliation: ${userAff}`);
  }

  let targets = List();
  if (scope === TARGET_ALL_ENEMIES || scope === TARGET_ENEMY) {
    targets = userFoes;
  } else if (scope === TARGET_ALL_ALLIES || scope === TARGET_ALLY) {
    targets = userAllies;
  } else if (scope === TARGET_SELF) {
    targets = List([user.getId()]);
  } else {
    throw new RangeError(`Invalid battleAction scope: "${scope}".`);
  }

  return targets.toSet();
}

function mapIds(list) {
  return list.map(item => item.get('id'))
}

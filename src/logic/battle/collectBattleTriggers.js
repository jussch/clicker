/**
 * Created by Justin on 6/11/2018.
 */
import { List } from 'immutable';
import { selectPlayer } from '../../selectors/PlayerSelectors';
import { selectEnemies, selectAllies } from '../../selectors/BattleSelectors';

export default function collectBattleTriggers(state) {
  const player = selectPlayer(state);
  const enemies = selectEnemies(state);
  const allies = selectAllies(state);

  let battleTriggers = List();

  /**
   * Collect enemy triggers first.
   */
  enemies.forEach((enemy) => {
    if (enemy.isDead()) return;
    battleTriggers = battleTriggers.concat(enemy.getTriggers());
  });

  /**
   * Collect ally triggers second.
   */
  allies.forEach((ally) => {
    if (ally.isDead()) return;
    battleTriggers = battleTriggers.concat(ally.getTriggers());
  });

  /**
   * Collect player triggers last.
   */
  battleTriggers = battleTriggers.concat(player.getTriggers());

  return battleTriggers;
}

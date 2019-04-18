/**
 * Created by Justin on 4/16/2019.
 */
import BattlePanel from './BattlePanel';
import StatsPanel from './StatsPanel';
import VillagePanel from './VillagePanel';
import {
  BATTLE_PANEL,
  STATS_PANEL,
  VILLAGE_PANEL,
} from '../../constants/ViewTypes';

export default function getPanelByType(type) {
  switch (type) {
    case BATTLE_PANEL:
      return BattlePanel;
    case STATS_PANEL:
      return StatsPanel;
    case VILLAGE_PANEL:
      return VillagePanel;
    default:
      throw new RangeError(`getPanelByType(): Invalid panel type "${type}".`);
  }
}

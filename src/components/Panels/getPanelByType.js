/**
 * Created by Justin on 4/16/2019.
 */
import {
  BATTLE_PANEL,
  STATS_PANEL,
  VILLAGE_PANEL,
} from '../../constants/ViewTypes';

export default function getPanelByType(type) {
  switch (type) {
    case BATTLE_PANEL:
      return null;
    case STATS_PANEL:
      return null;
    case VILLAGE_PANEL:
      return null;
    default:
      throw new RangeError(`getPanelByType(): Invalid panel type "${type}".`);
  }
}

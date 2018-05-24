/**
 * Created by Justin on 5/23/2018.
 */
import mapKeys from 'lodash/mapKeys';

export const UPGRADE_IRON_HOE = {
  name: 'ironHoe',
  displayName: 'Iron Hoe',
  maxLevel: 10,
  costMod: 3,
  baseCost: {
    metal: 200,
  },

  bonus: {
    buildings: {
      farm: {
        resourceRate: 2,
      }
    }
  }
};

export const ALL_UPGRADES = [
  UPGRADE_IRON_HOE,
];

export const ALL_UPGRADES_BY_NAME = mapKeys(ALL_UPGRADES, ({ name }) => name);

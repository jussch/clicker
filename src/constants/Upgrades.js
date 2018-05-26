/**
 * Created by Justin on 5/23/2018.
 */
import createInfo from './utilities/createInfo';
import createNameMapper from './utilities/createNameMapper';
import ValueAdjustment from './utilities/ValueAdjustment';

export const UPGRADE_IRON_HOE = createInfo({
  name: 'ironHoe',
  displayName: 'Iron Hoe',
  maxLevel: 10,
  cost: {
    costMod: 3,
    baseCost: {
      metal: 200,
    },
  },

  bonus: {
    buildings: {
      farm: {
        resourceRate: {
          food: ValueAdjustment.addPercent(25),
        },
      }
    }
  }
});

export const ALL_UPGRADES = [
  UPGRADE_IRON_HOE,
];

export const getUpgradeInfo = createNameMapper(ALL_UPGRADES, 'Upgrade');

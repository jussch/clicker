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
      metal: 10,
    },
  },

  bonuses: {
    buildings: {
      farm: {
        resourceRate: {
          food: ValueAdjustment.addPercent(0.25),
        },
      }
    }
  }
});

export const UPGRADE_IRON_AXE = createInfo({
  name: 'ironAxe',
  displayName: 'Iron Axe',
  maxLevel: 10,
  cost: {
    costMod: 3,
    baseCost: {
      lumber: 10,
      metal: 10,
    },
  },

  bonuses: {
    buildings: {
      sawmill: {
        resourceRate: {
          lumber: ValueAdjustment.addFixed(5),
        },
      }
    }
  }
});

export const UPGRADE_IRON_PICKAXE = createInfo({
  name: 'ironPickaxe',
  displayName: 'Iron Pickaxe',
  maxLevel: 10,
  cost: {
    costMod: 3,
    baseCost: {
      metal: 100,
    },
  },

  bonuses: {
    buildings: {
      mines: {
        resourceRate: {
          metal: ValueAdjustment.timesPercent(1.25),
        },
      }
    }
  }
});

export const ALL_UPGRADES = [
  UPGRADE_IRON_HOE,
  UPGRADE_IRON_AXE,
  UPGRADE_IRON_PICKAXE,
];

export const getUpgradeInfo = createNameMapper(ALL_UPGRADES, 'Upgrade');

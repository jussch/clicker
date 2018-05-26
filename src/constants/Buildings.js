/**
 * Created by Justin on 5/19/2018.
 */
import createInfo from './utilities/createInfo';
import createNameMapper from './utilities/createNameMapper';

export const BUILDING_FARM = createInfo({
  name: 'farm',
  displayName: 'Farm',
  cost: {
    baseCost: {
      gold: 10,
    },
    costMod: 1.3,
  },
  baseResources: {
    food: 3,
  },
  prerequisites: {

  }
});

export const BUILDING_SAWMILL = createInfo({
  name: 'sawmill',
  displayName: 'Sawmill',
  cost: {
    baseCost: {
      gold: 10,
      food: 10,
    },
    costMod: 1.3,
  },
  baseResources: {
    lumber: 3,
  },
  prerequisites: {

  }
});

export const BUILDING_MINES = createInfo({
  name: 'mines',
  displayName: 'Mines',
  cost: {
    baseCost: {
      gold: 10,
      food: 10,
      lumber: 10,
    },
    costMod: 1.3,
  },
  baseResources: {
    metal: 3,
  },
  prerequisites: {

  }
});

export const ALL_BUILDINGS = [
  BUILDING_FARM,
  BUILDING_SAWMILL,
  BUILDING_MINES,
];

export const getBuildingInfo = createNameMapper(ALL_BUILDINGS, 'Building');

/**
 * Created by Justin on 5/19/2018.
 */
import mapKeys from 'lodash/mapKeys';

export const BUILDING_FARM = {
  name: 'farm',
  displayName: 'Farm',
  baseCost: {
    gold: 10,
  },
  costMod: 1.3,
  baseResources: {
    food: 3,
  },
  prerequisites: {

  }
};

export const BUILDING_SAWMILL = {
  name: 'sawmill',
  displayName: 'Sawmill',
  baseCost: {
    gold: 10,
    food: 50,
  },
  costMod: 1.3,
  baseResources: {
    lumber: 3,
  },
  prerequisites: {

  }
};

export const BUILDING_MINES = {
  name: 'mines',
  displayName: 'Mines',
  baseCost: {
    gold: 10,
    food: 50,
    lumber: 100,
  },
  costMod: 1.3,
  baseResources: {
    metal: 3,
  },
  prerequisites: {

  }
};

export const ALL_BUILDINGS = [
  BUILDING_FARM,
  BUILDING_SAWMILL,
  BUILDING_MINES,
];

export const ALL_BUILDINGS_BY_NAME = mapKeys(ALL_BUILDINGS, ({ name }) => name);


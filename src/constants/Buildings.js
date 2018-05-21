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
    food: 2,
    gold: 1,
  },
  prerequisites: {

  }
};

export const ALL_BUILDINGS = [
  BUILDING_FARM,
];

export const ALL_BUILDINGS_BY_NAME = mapKeys(ALL_BUILDINGS, ({ name }) => name);


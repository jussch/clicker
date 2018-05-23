/**
 * Created by Justin on 5/19/2018.
 */
import mapKeys from 'lodash/mapKeys';

export const RESOURCE_GOLD = {
  name: 'gold',
  displayName: 'Gold',
};

export const RESOURCE_FOOD = {
  name: 'food',
  displayName: 'Food',
};

export const RESOURCE_LUMBER = {
  name: 'lumber',
  displayName: 'Lumber',
};

export const RESOURCE_METAL = {
  name: 'metal',
  displayName: 'Metal',
};

export const RESOURCE_BANANA = {
  name: 'banana',
  displayName: 'Bananas',
};

export const ALL_RESOURCES = [
  RESOURCE_GOLD,
  RESOURCE_FOOD,
  RESOURCE_LUMBER,
  RESOURCE_METAL,
  RESOURCE_BANANA,
];

export const ALL_RESOURCES_BY_NAME = mapKeys(ALL_RESOURCES, ({ name }) => name);


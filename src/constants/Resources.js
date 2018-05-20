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

export const ALL_RESOURCES = [
  RESOURCE_GOLD,
  RESOURCE_FOOD,
];

export const ALL_RESOURCES_BY_NAME = mapKeys(ALL_RESOURCES, ({ name }) => name);

/**
 * Created by Justin on 5/19/2018.
 */
import createInfo from './utilities/createInfo';
import createNameMapper from './utilities/createNameMapper';

export const RESOURCE_GOLD = createInfo({
  name: 'gold',
  displayName: 'Gold',
});

export const RESOURCE_FOOD = createInfo({
  name: 'food',
  displayName: 'Food',
});

export const RESOURCE_LUMBER = createInfo({
  name: 'lumber',
  displayName: 'Lumber',
});

export const RESOURCE_METAL = createInfo({
  name: 'metal',
  displayName: 'Metal',
});

export const RESOURCE_BANANA = createInfo({
  name: 'banana',
  displayName: 'Bananas',
});

export const ALL_RESOURCES = [
  RESOURCE_GOLD,
  RESOURCE_FOOD,
  RESOURCE_LUMBER,
  RESOURCE_METAL,
  RESOURCE_BANANA,
];

export const getResourceInfo = createNameMapper(ALL_RESOURCES, 'Resource');

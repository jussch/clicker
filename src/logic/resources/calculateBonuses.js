/**
 * Created by Justin on 5/26/2018.
 */
import { Map, Iterable, List, Set } from 'immutable';
import { selectBuildings } from '../../selectors/BuildingSelectors';
import { selectUpgrades } from '../../selectors/UpgradeSelectors';
import ValueAdjustment from '../../models/ValueAdjustment';

export default function calculateBonuses(state) {
  let totalBonuses = Map();
  let bonusLocations = Set();
  function addBonuses(bonuses, multiplier) {
    bonuses.forEach(({ path, valueAdjustment }) => {
      bonusLocations = bonusLocations.add(path.join('.'));
      totalBonuses = totalBonuses.updateIn(path, List(), bonusesList => (
        bonusesList.push(valueAdjustment.times(multiplier))
      ))
    });
  }

  const upgrades = selectUpgrades(state);
  upgrades.forEach((upgrade) => {
    const level = upgrade.get('level');
    const upgradeInfo = upgrade.getUpgradeInfo();
    const upgradeBonuses = getAllValueAdjustments(upgradeInfo);
    addBonuses(upgradeBonuses, level);
  });

  const buildings = selectBuildings(state);
  buildings.forEach((building) => {
    const quantity = building.get('quantity');
    const buildingInfo = building.getBuildingInfo();
    const buildingBonuses = getAllValueAdjustments(buildingInfo);
    addBonuses(buildingBonuses, quantity);
  });

  const allPaths = bonusLocations.toArray().map(pathString => pathString.split('.'));
  return allPaths.reduce((nextTotalBonus, path) => (
    nextTotalBonus.updateIn(path, adjustments => ValueAdjustment.combineByRank(adjustments))
  ), totalBonuses);
}

function getAllValueAdjustments(infoModel) {
  function search(map, path = []) {
    const foundPaths = [];
    map.forEach((mapValue, mapKey) => {
      const currentPath = [...path, mapKey];
      if (mapValue instanceof ValueAdjustment) {
        foundPaths.push({ path: currentPath, valueAdjustment: mapValue });
      } else if (Iterable.isIterable(mapValue)) {
        foundPaths.push(...search(mapValue, currentPath));
      }
    });

    return foundPaths;
  }

  if (!infoModel.has('bonuses')) return [];

  return search(infoModel.get('bonuses'));
}

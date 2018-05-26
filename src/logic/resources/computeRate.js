/**
 * Created by Justin on 5/22/2018.
 */
import { Map } from 'immutable';
import addMaps from '../../utilities/immutable/addMaps';
import { selectBuildings } from '../../selectors/BuildingSelectors';
import calculateBonuses from './calculateBonuses';
import ValueAdjustment from '../../constants/utilities/ValueAdjustment';

export default function computeRate(state) {
  const buildings = selectBuildings(state);

  const allBonuses = calculateBonuses(state);

  const buildingsRate = buildings.reduce((rate, building) => {
    const computedRate = building.getComputedResources((rate, resourceName) => {
      const bonusPath = ['buildings', building.get('name'), 'resourceRate', resourceName];
      if (!allBonuses.hasIn(bonusPath)) return rate;
      const rankedBonuses = allBonuses.getIn(bonusPath);

      return ValueAdjustment.adjustValueByRankedAdjustments(rate, rankedBonuses);
    });

    return addMaps(rate, computedRate);
  }, Map());

  return buildingsRate;
}

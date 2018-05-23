/**
 * Created by Justin on 5/22/2018.
 */
import { Map } from 'immutable';
import addMaps from '../../utilities/immutable/addMaps';
import { selectBuildings } from '../../selectors/BuildingSelectors';

export default function computeRate(state) {
  const buildings = selectBuildings(state);

  const buildingsRate = buildings.reduce((rate, building) => (
    addMaps(rate, building.getComputedResources())
  ), Map());

  return buildingsRate;
}

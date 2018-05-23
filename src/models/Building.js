/**
 * Created by Justin on 5/19/2018.
 */
import { compose } from 'recompose';
import { Map } from 'immutable';
import createModel from './extensions/createModel';
import { ALL_BUILDINGS_BY_NAME } from '../constants/Buildings';

const BuildingSchema = {
  name: null,
  quantity: 0,
};

const enhance = compose(

);

export default class Building extends enhance(createModel(BuildingSchema)) {
  validateName() {
    const name = this.get('name');
    if (name == null || ALL_BUILDINGS_BY_NAME[name] == null) {
      throw new RangeError(`Invalid building name: "${name}".`);
    }
  }

  getBuildingInfo() {
    return ALL_BUILDINGS_BY_NAME[this.get('name')];
  }

  getComputedCost() {
    if (this._computedCost) return this._computedCost;
    this.validateName();

    const buildingInfo = this.getBuildingInfo();
    const quantity = this.get('quantity');
    const baseCost = Map(buildingInfo.baseCost);
    this._computedCost = baseCost.map(cost => cost * (buildingInfo.costMod ** quantity));

    return this._computedCost;
  }

  getQuantityCost(number) {
    if (number === 1) return this.getComputedCost();

    const buildingInfo = this.getBuildingInfo();
    const quantity = this.get('quantity');
    const baseCost = Map(buildingInfo.baseCost);

    let totalCost = Map();
    for (let i = 0; i < number; i += 1) {
      const indexQuantity = quantity + i;
      const indexCost = baseCost.map(cost => cost * (buildingInfo.costMod ** indexQuantity));
      totalCost = indexCost.map((cost, name) => cost + (totalCost.get(name) || 0));
    }

    return totalCost;
  }

  getComputedResources() {
    if (this._computedResources) return this._computedResources;

    const buildingInfo = this.getBuildingInfo();
    const quantity = this.get('quantity');
    const baseResources = Map(buildingInfo.baseResources);
    this._computedResources = baseResources.map(value => value * quantity);

    return this._computedResources;
  }
}

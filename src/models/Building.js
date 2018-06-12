/**
 * Created by Justin on 5/19/2018.
 */
import { compose } from 'recompose';
import identity from 'lodash/identity';
import createModel from './extensions/createModel';
import { getBuildingInfo } from '../constants/Buildings';

const BuildingSchema = {
  name: null,
  quantity: 0,
};

const enhance = compose(
  createModel({
    name: 'Building',
  }),
);

export default class Building extends enhance(BuildingSchema) {
  getBuildingInfo() {
    return getBuildingInfo(this.get('name'));
  }

  getComputedCost() {
    if (this._computedCost) return this._computedCost;

    const buildingInfo = this.getBuildingInfo();
    const quantity = this.get('quantity');
    this._computedCost = buildingInfo.get('cost').computeCost(quantity);

    return this._computedCost;
  }

  getQuantityCost(number) {
    if (number === 1) return this.getComputedCost();

    const buildingInfo = this.getBuildingInfo();
    const quantity = this.get('quantity');
    return buildingInfo.get('cost').computeCost(quantity, number);
  }

  getComputedResources(resourceMapper = identity) {
    // if (this._computedResources) return this._computedResources;

    const buildingInfo = this.getBuildingInfo();
    const quantity = this.get('quantity');
    const baseResources = buildingInfo.get('baseResources');
    this._computedResources = baseResources.map((value, resourceName) => (
      resourceMapper(value, resourceName, baseResources, this) * quantity
    ));

    return this._computedResources;
  }
}

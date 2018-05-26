/**
 * Created by Justin on 5/19/2018.
 */
import { compose } from 'recompose';
import createModel from './extensions/createModel';
import { getBuildingInfo } from '../constants/Buildings';

const BuildingSchema = {
  name: null,
  quantity: 0,
};

const enhance = compose(

);

export default class Building extends enhance(createModel(BuildingSchema)) {
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

  getComputedResources() {
    if (this._computedResources) return this._computedResources;

    const buildingInfo = this.getBuildingInfo();
    const quantity = this.get('quantity');
    const baseResources = buildingInfo.get('baseResources');
    this._computedResources = baseResources.map(value => value * quantity);

    return this._computedResources;
  }
}

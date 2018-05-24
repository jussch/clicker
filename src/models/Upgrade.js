/**
 * Created by Justin on 5/19/2018.
 */
import { compose } from 'recompose';
import { Map } from 'immutable';
import createModel from './extensions/createModel';
import { ALL_UPGRADES_BY_NAME } from '../constants/Upgrades';

const UpgradeSchema = {
  name: null,
  level: 0,
};

const enhance = compose(

);

export default class Upgrade extends enhance(createModel(UpgradeSchema)) {
  validateName() {
    const name = this.get('name');
    if (name == null || ALL_UPGRADES_BY_NAME[name] == null) {
      throw new RangeError(`Invalid upgrade name: "${name}".`);
    }
  }

  getUpgradeInfo() {
    return ALL_UPGRADES_BY_NAME[this.get('name')];
  }

  getComputedCost() {
    if (this._computedCost) return this._computedCost;
    this.validateName();

    const upgradeInfo = this.getUpgradeInfo();
    const quantity = this.get('level');
    const baseCost = Map(upgradeInfo.baseCost);
    this._computedCost = baseCost.map(cost => cost * (upgradeInfo.costMod ** quantity));

    return this._computedCost;
  }

  getQuantityCost(number) {
    if (number === 1) return this.getComputedCost();

    const upgradeInfo = this.getUpgradeInfo();
    const quantity = this.get('level');
    const baseCost = Map(upgradeInfo.baseCost);

    let totalCost = Map();
    for (let i = 0; i < number; i += 1) {
      const indexQuantity = quantity + i;
      const indexCost = baseCost.map(cost => cost * (upgradeInfo.costMod ** indexQuantity));
      totalCost = indexCost.map((cost, name) => cost + (totalCost.get(name) || 0));
    }

    return totalCost;
  }

  getComputedResources() {
    if (this._computedResources) return this._computedResources;

    const upgradeInfo = this.getUpgradeInfo();
    const quantity = this.get('quantity');
    const baseResources = Map(upgradeInfo.baseResources);
    this._computedResources = baseResources.map(value => value * quantity);

    return this._computedResources;
  }
}

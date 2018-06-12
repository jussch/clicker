/**
 * Created by Justin on 5/19/2018.
 */
import { compose } from 'recompose';
import createModel from './extensions/createModel';
import { getUpgradeInfo } from '../constants/Upgrades';

const UpgradeSchema = {
  name: null,
  level: 0,
};

const enhance = compose(
  createModel(),
);

export default class Upgrade extends enhance(UpgradeSchema) {
  getUpgradeInfo() {
    return getUpgradeInfo(this.get('name'));
  }

  getComputedCost() {
    if (this._computedCost) return this._computedCost;

    const upgradeInfo = this.getUpgradeInfo();
    const level = this.get('level');
    this._computedCost = upgradeInfo.get('cost').computeCost(level);

    return this._computedCost;
  }

  getQuantityCost(number) {
    if (number === 1) return this.getComputedCost();

    const upgradeInfo = this.getUpgradeInfo();
    const level = this.get('level');
    return upgradeInfo.get('cost').computeCost(level, number);
  }
}

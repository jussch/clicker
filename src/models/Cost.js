/**
 * Created by Justin on 5/19/2018.
 */
import { compose } from 'recompose';
import { Map } from 'immutable';
import createModel from './extensions/createModel';

const CostSchema = {
  costMod: 1,
  baseCost: Map(),
};

const enhance = compose(

);

export default class Cost extends enhance(createModel(CostSchema)) {
  computeCost(startNum, quantity = 1) {
    const baseCost = this.get('baseCost');
    const costMod = this.get('costMod');
    console.log('baseCost:', baseCost.toJS());
    console.log('costMod:', costMod);

    let totalCost = Map();
    for (let i = 0; i < quantity; i += 1) {
      const indexQuantity = startNum + i;
      const indexCost = baseCost.map(cost => cost * (costMod ** indexQuantity));
      totalCost = indexCost.map((cost, name) => cost + (totalCost.get(name) || 0));
    }

    return totalCost;
  }

  // static fromJS(data = {}) {
  //   return new this(data)
  //     .set('baseCost', ResourceValues.create(data.baseCost));
  // }
}

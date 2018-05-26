/**
 * Created by Justin on 5/26/2018.
 */
import { compose } from 'recompose';
import { List } from 'immutable';
import createModel from '../../models/extensions/createModel';

const ValueAdjustmentSchema = {
  rankPos: 0,
  fixedAdd: 0,
  percentAdd: 0,
  percentTimes: 1,
};

const enhance = compose(

);

export default class ValueAdjustment extends enhance(createModel(ValueAdjustmentSchema)) {
  adjust(value) {
    const fixedValue = value + this.get('fixedAdd');
    const perAddValue = fixedValue * (1 + this.get('percentAdd'));
    return perAddValue * this.get('percentTimes');
  }

  times(number) {
    return this
      .set('fixedAdd', this.get('fixedAdd') * number)
      .set('percentAdd', this.get('percentAdd') * number)
      .set('percentTimes', this.get('percentTimes') ** number);
  }

  add(valueAdjustment) {
    return this
      .set('fixedAdd', this.get('fixedAdd') + valueAdjustment.get('fixedAdd'))
      .set('percentAdd', this.get('percentAdd') + valueAdjustment.get('percentAdd'))
      .set('percentTimes', this.get('percentTimes') * valueAdjustment.get('percentTimes'));
  }

  rank(number) {
    return this.set('rankPos', number);
  }

  static addFixed(value) {
    return this.create({ fixedAdd: value });
  }

  static addPercent(value) {
    return this.create({ percentAdd: value });
  }

  static timesPercent(value) {
    return this.create({ percentTimes: value });
  }

  static sortByRank(valueAdjustments) {
    return valueAdjustments.reduce((currList, valueAdjustment) => (
      currList.update(valueAdjustment.get('rankPos'), List(), otherAdjusts => (
        otherAdjusts.push(valueAdjustment)
      ))
    ), List());
  }

  static combineByRank(valueAdjustments) {
    const adjustmentsByRank = this.sortByRank(valueAdjustments);
    return adjustmentsByRank.map((adjustmentsAtRank, rankPos) => (
      (adjustmentsAtRank || List()).reduce((totalAdjust, adjust) => (
        totalAdjust.add(adjust)
      ), this.create({ rankPos }))
    ));
  }

  static adjustValueByRankedAdjustments(value, adjustmentsByRank) {
    return adjustmentsByRank.reduce((nextValue, adjustmentAtRank) => (
      adjustmentAtRank.adjust(nextValue)
    ), value);
  }

  static adjustValueByRank(value, valueAdjustments) {
    const adjustmentsByRank = this.combineByRank(valueAdjustments);
    return this.adjustValueByRankedAdjustments(adjustmentsByRank);
  }
}

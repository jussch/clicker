/**
 * Created by Justin on 5/26/2018.
 */
import { compose } from 'recompose';
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
  times(number) {
    return this
      .set('fixedAdd', this.get('fixedAdd') * number)
      .set('percentAdd', this.get('percentAdd') * number)
      .set('percentTime', this.get('percentTime') ** number);
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
}

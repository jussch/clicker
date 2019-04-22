/**
 * Created by Justin-Desktop on 5/16/2018.
 */
import { compose } from 'recompose';
import createModel from './extensions/createModel';
import { getResourceInfo } from '../constants/Resources';

export const Schema = {
  name: null,
  amount: 0,
  gainPerSecond: 0,
  lossPerSecond: 0,
};

const enhance = compose(
  createModel({
    name: 'Resource',
  }),
);

export default class Resource extends enhance(Schema) {
  getResourceInfo() {
    return getResourceInfo(this.get('name'));
  }

  getTotalRate() {
    return this.get('gainPerSecond') - this.get('lossPerSecond');
  }
}

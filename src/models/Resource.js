/**
 * Created by Justin-Desktop on 5/16/2018.
 */
import { compose } from 'recompose';
import createModel from './extensions/createModel';

export const Schema = {
  amount: 0,
  perSecond: 0,
};

const enhance = compose(

);

export default class Resource extends enhance(createModel(Schema)) {

}

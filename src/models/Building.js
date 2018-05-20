/**
 * Created by Justin on 5/19/2018.
 */
import { compose } from 'recompose';
import createModel from './extensions/createModel';

const BuildingSchema = {
  quantity: 0,
};

const enhance = compose(

);

export default class Building extends enhance(createModel(BuildingSchema)) {

}

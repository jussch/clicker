/**
 * Created by Justin on 5/19/2018.
 */
import { compose } from 'recompose';
import createModel from './extensions/createModel';

const BattleTriggerSchema = {
  type: null,
  user: null,
  action: null,
  effect: null,
};

const enhance = compose(
  createModel(),
);

export default class BattleTrigger extends enhance(BattleTriggerSchema) {

}

/**
 * Created by Justin on 5/19/2018.
 */
import { compose } from 'recompose';
import { Map } from 'immutable';
import createModel from './extensions/createModel';

const BattleActionSchema = {
  type: null,
  subtype: null,
  scope: null,
  energyCost: 0,
  mpCost: 0,
  effects: Map(),
};

const enhance = compose(
  createModel({
    name: 'BattleAction',
    childModels: {
      effects: 'BattleEffect',
    },
  }),
);

export default class BattleAction extends enhance(BattleActionSchema) {
  generateEffect(user) {
    return this.get('effects');
  }
}

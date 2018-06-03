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
  manaCost: 0,
  effects: {},
};

const enhance = compose(

);

export default class BattleAction extends enhance(createModel(BattleActionSchema)) {

}

/**
 * Created by Justin on 5/19/2018.
 */
import { compose } from 'recompose';
import { List } from 'immutable';
import createModel from './extensions/createModel';

const BattleEffectSchema = {
  damage: 0,
  manaDamage: 0,
  afflictions: List(),
};

const enhance = compose(
  createModel(),
);

export default class BattleEffect extends enhance(BattleEffectSchema) {

}

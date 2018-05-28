/**
 * Created by Justin on May 15, 2018
*/
import { compose } from 'recompose';
import createModel from './extensions/createModel';
import applyBattler, { BATTLER_ATTRIBUTES } from './extensions/applyBattler';

export const Schema = {
  ...BATTLER_ATTRIBUTES,
  energy: 0,
  maxEnergy: 100,
};

const enhance = compose(
  applyBattler(),
);

export default class Player extends enhance(createModel(Schema)) {

}

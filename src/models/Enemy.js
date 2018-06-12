/**
 * Created by Justin on May 15, 2018
*/
import { compose } from 'recompose';
import createModel from './extensions/createModel';
import applyBattler, { BATTLER_ATTRIBUTES } from './extensions/applyBattler';
import { AFF_ENEMY } from '../constants/BattleActions';

export const Schema = {
  ...BATTLER_ATTRIBUTES,
  name: 'Enemy',
};

const enhance = compose(
  applyBattler({
    affiliation: AFF_ENEMY,
  }),

  createModel({
    name: 'Enemy',
  }),
);

export default class Enemy extends enhance(Schema) {

}

/**
 * Created by Justin on May 15, 2018
*/
import { compose } from 'recompose';
import { List } from 'immutable';
import createModel from './extensions/createModel';
import applyBattler, { BATTLER_ATTRIBUTES } from './extensions/applyBattler';
import { AFF_ENEMY, SUBTYPE_ATTACK, TARGET_ENEMY, TYPE_BASIC } from '../constants/BattleActions';
import { getModel } from './extensions/allModels';

export const Schema = {
  ...BATTLER_ATTRIBUTES,
  name: 'Enemy',
  actions: List(),
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
  getTriggers() {
    const BattleTrigger = getModel('BattleTrigger');
    const BattleAction = getModel('BattleAction');

    const action = BattleAction.createFromJS({
      type: TYPE_BASIC,
      subtype: SUBTYPE_ATTACK,
      scope: TARGET_ENEMY,
      effects: {
        damage: this.get('power'),
      },
    });

    return List([
      BattleTrigger.createFromJS({
        user: this,
        action: action,
      }).setActionTrigger(),
    ]);
  }
}

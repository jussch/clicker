/**
 * Created by Justin on 5/19/2018.
 */
import { compose } from 'recompose';
import createModel from './extensions/createModel';
import { ACTION_TRIGGER, EFFECT_TRIGGER } from '../constants/BattleTriggers';

const BattleTriggerSchema = {
  type: null,
  user: null,
  action: null,
  effect: null,
};

const enhance = compose(
  createModel({
    name: 'BattleTrigger',
    childModels: {
      action: 'BattleAction',
      effect: 'BattleEffect',
    },
  }),
);

export default class BattleTrigger extends enhance(BattleTriggerSchema) {
  isActionTrigger() {
    return this.get('type') === ACTION_TRIGGER;
  }

  isEffectTrigger() {
    return this.get('type') === EFFECT_TRIGGER;
  }

  setActionTrigger() {
    return this.set('type', ACTION_TRIGGER);
  }

  setEffectTrigger() {
    return this.set('type', EFFECT_TRIGGER);
  }
}

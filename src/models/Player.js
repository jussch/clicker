/**
 * Created by Justin on May 15, 2018
*/
import { compose } from 'recompose';
import createModel from './extensions/createModel';
import applyBattler, { BATTLER_ATTRIBUTES, clampValue } from './extensions/applyBattler';
import { AFF_PLAYER } from '../constants/BattleActions';

export const Schema = {
  ...BATTLER_ATTRIBUTES,
  energy: 0,
  maxEnergy: 50,
  energyRate: 25,
};

const enhance = compose(
  applyBattler({
    affiliation: AFF_PLAYER,
  }),

  createModel({
    name: 'Player',
  }),
);

export default class Player extends enhance(Schema) {
  applyCost(battleAction) {
    return super.applyCost(battleAction)
      .update('energy', energy => (
        clampValue(energy - battleAction.get('energyCost'), this.get('maxEnergy'))
      ));
  }

  canUseAction(battleAction) {
    return super.canUseAction(battleAction) &&
      this.get('energy') >= battleAction.get('energyCost');
  }

  resetState() {
    return super.resetState().set('energy', this.get('energyRate'));
  }

  updateStartOfTurn() {
    return super.updateStartOfTurn()
      .update('energy', energy => Math.min(energy + this.get('energyRate'), this.get('maxEnergy')));
  }
}

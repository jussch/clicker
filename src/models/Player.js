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
  combo: 0,
  maxCombo: 3,
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

  addCombo() {
    const maxCombo = this.get('maxCombo');
    return this.update('combo', combo => Math.min((combo + 1) % maxCombo, maxCombo));
  }

  getComboMod() {
    const combo = this.get('combo');
    const maxCombo = this.get('maxCombo');

    const isMaxCombo = combo === maxCombo - 1;
    const modNum = isMaxCombo ? combo + 1 : combo;
    const modAmp = 0.2;

    return 1 + (modAmp * modNum);
  }

  updateStartOfTurn() {
    return super.updateStartOfTurn()
      .set('combo', 0)
      .update('energy', energy => Math.min(energy + this.get('energyRate'), this.get('maxEnergy')));
  }
}

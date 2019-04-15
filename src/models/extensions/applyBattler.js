/**
 * Created by Justin on May 15, 2018
*/
import { List } from 'immutable';

export default function applyBattler(options = {}) {
  const {
    affiliation,
  } = options;

  return (GivenClass) => {
    return class Battler extends GivenClass {
      /**
       * Readers
       */
      isDead() {
        return this.get('hp') <= 0;
      }

      isFullHp() {
        return this.get('hp') === this.get('maxHp');
      }

      isDamaged() {
        return this.get('hp') < this.get('maxHp');
      }

      hpUnderPercent(percent) {
        return this.get('hp') <= this.get('maxHp') * percent;
      }

      isCritical() {
        return this.hpUnderPercent(1 / 3);
      }

      getAffiliation() {
        return affiliation;
      }

      canUseAction(battleAction) {
        return this.get('mp') >= battleAction.get('mpCost');
      }

      getTriggers() {
        return List();
      }

      /**
       * Setters
       */
      applyDamage(damage) {
        if (damage === 0) return this;
        const unblockedDamage = Math.max(0, damage - this.get('block'));
        return this
          .applyBlock(-damage)
          .update('hp', hp => Math.max(hp - unblockedDamage, 0));
      }

      applyBlock(blockAmount) {
        if (blockAmount === 0) return this;
        return this.update('block', block => Math.max(0, block + blockAmount));
      }

      calculateResistance(damage) {
        const defense = this.get('defense');
        const absDefense = Math.abs(defense);
        return damage * (1 - (defense / (absDefense + 32)));
      }

      applyEffect(effect) {
        return this
          .applyDamage(this.calculateResistance(effect.get('damage')))
          .applyBlock(effect.get('block'));
      }

      updateStartOfTurn() {
        return this.set('block', 0);
      }

      applyCost(battleAction) {
        return this.update('mp', mp => clampValue(mp - battleAction.get('mpCost'), this.get('maxMp')))
      }

      resetState() {
        return this
          .set('hp', this.get('maxHp'))
          .set('mp', this.get('maxMp'));
      }
    };
  };
}

export const BATTLER_ATTRIBUTES = {
  maxHp: 100,
  hp: 100,
  maxMp: 0,
  mp: 0,
  block: 0,
  power: 0,
  defense: 0,
};

export function clampValue(value, max) {
  return Math.max(Math.min(value, max), 0);
}

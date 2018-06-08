/**
 * Created by Justin on May 15, 2018
*/

export default function applyBattler(options = {}) {
  const {
    affiliation,
  } = options;

  return (GivenClass) => {
    return class Battler extends GivenClass {
      applyDamage(damage) {
        return this.update('hp', hp => Math.max(hp - damage, 0));
      }

      applyEffect(effect) {
        return this.applyDamage(effect.get('damage') || 0);
      }

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

      updateStartOfTurn() {
        return this.set('block', 0);
      }

      getAffiliation() {
        return affiliation;
      }

      applyCost(battleAction) {
        return this.update('mp', mp => clampValue(mp - battleAction.get('mpCost'), this.get('maxMp')))
      }

      canUseAction(battleAction) {
        return this.get('mp') >= battleAction.get('mpCost');
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

/**
 * Created by Justin on May 15, 2018
*/

export default function applyBattler(options = {}) {
  return (GivenClass) => {
    return class Battler extends GivenClass {
      applyDamage(damage) {
        return this.update('hp', hp => Math.min(hp - damage));
      }
    };
  };
}

export const BATTLER_ATTRIBUTES = {
  maxHp: 100,
  hp: 100,
  maxMp: 0,
  mp: 0,
  power: 0,
  defense: 0,
};

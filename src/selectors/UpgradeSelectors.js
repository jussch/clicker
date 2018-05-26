/**
 * Created by Justin on 5/20/2018.
 */

export function selectUpgrades(state) {
  return state.get('upgrades');
}

export function selectUpgrade(name) {
  return state => selectUpgrades(state).get(name);
}

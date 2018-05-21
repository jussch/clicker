/**
 * Created by Justin on 5/20/2018.
 */

export function selectBuildings(state) {
  return state.get('buildings');
}

export function selectBuilding(name) {
  return state => selectBuildings(state).get(name);
}

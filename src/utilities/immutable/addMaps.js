/**
 * Created by Justin on 5/22/2018.
 */

/**
 * Adds the numbers of two maps together.
 * @param {Immutable.Map} map1
 * @param {Immutable.Map} maps
 * @returns {Immutable.Map}
 */
export default function addMaps(map1, ...maps) {
  return map1.mergeWith((oldVal, newVal) => oldVal + newVal, ...maps);
}

/**
 * Created by Justin on 5/26/2018.
 */
import mapKeys from 'lodash/mapKeys';

export default function createNameMapper(allInfos, collectionName = 'Info') {
  const infoByName = mapKeys(allInfos, (infoModel) => infoModel.get('name'));

  return function nameMapper(name) {
    if (!infoByName.hasOwnProperty(name)) {
      throw new RangeError(`Invalid ${collectionName} name: "${name}".`);
    }

    return infoByName[name];
  };
}

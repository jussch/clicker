/**
 * Created by Justin on 5/26/2018.
 */
import mapKeys from 'lodash/mapKeys';

export default function createNameMapper(allInfos, collectionName = 'Info') {
  const infoByName = mapKeys(allInfos, ({ name }) => name);

  return function nameMapper(name) {
    const infoModel = infoByName[name];
    if (infoModel == null) {
      throw new RangeError(`Invalid ${collectionName} name: "${name}".`);
    }

    return infoModel;
  };
}

/**
 * Created by Justin on 5/19/2018.
 */
import { compose } from 'recompose';
import fromPairs from 'lodash/fromPairs';
import createModel from '../extensions/createModel';
import { ALL_RESOURCES } from '../../constants/Resources';

const ResourceValuesSchema = fromPairs(ALL_RESOURCES, resourceInfo => (
  [resourceInfo.get('name'), 0]
));

const enhance = compose(
  createModel({
    name: 'ResourceValues',
  }),
);

export default class ResourceValues extends enhance(ResourceValuesSchema) {
  // Might be unnecessary. Used to be a Immutable Record.Map bug.
  map(cb) {
    return ALL_RESOURCES.reduce((lastThis, resourceInfo) => (
      lastThis.update(resourceInfo.name, value => cb(value, resourceInfo.name, lastThis))
    ), this)
  }

  mapExisting(cb) {
    return ALL_RESOURCES
      .filter(resourceInfo => this.get(resourceInfo.name) > 0)
      .reduce((lastThis, resourceInfo) => (
        lastThis.update(resourceInfo.name, value => cb(value, resourceInfo.name, lastThis))
      ), this)
  }
}

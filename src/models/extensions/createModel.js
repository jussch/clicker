/**
 * Created by Justin on May 15, 2018
*/
import { Record } from 'immutable';

export default function createModel(schema, options = {}) {
  return Record(schema);
}

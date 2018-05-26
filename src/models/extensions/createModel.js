/**
 * Created by Justin on May 15, 2018
*/
import { Record, fromJS } from 'immutable';

export default function createModel(schema, options = {}) {
  return class BaseModel extends Record(schema) {
    static create(data) {
      return new this(data);
    }

    static fromJS(data) {
      return new this(fromJS(data));
    }
  };
}

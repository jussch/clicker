/**
 * Created by Justin on May 15, 2018
*/
import { Record, fromJS } from 'immutable';

export default function createModel(schema, options = {}) {
  const {
    name =  null,
  } = options;

  const enhancedSchema = {
    ...schema,
    id: null,
  };

  let idIndex = -1;
  return class BaseModel extends Record(enhancedSchema) {
    getId() {
      return this.get('id');
    }

    static create(data) {
      return new this(data).set('id', this.generateId());
    }

    static generateId() {
      idIndex += 1;
      const usedName = name || this.name || `${Date.now()}`;
      const prefix = usedName ? `${usedName}_` : '';
      return `${prefix}${idIndex}`;
    }

    static fromJS(data) {
      return new this(fromJS(data));
    }

    static createFromJS(data) {
      return this.create(fromJS(data));
    }
  };
}

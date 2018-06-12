/**
 * Created by Justin on May 15, 2018
*/
import { Record, fromJS } from 'immutable';
import mapValues from 'lodash/mapValues';

const allModels = new Map();

export default function createModel(options = {}) {
  const {
    name = null,
    childModels = {},
  } = options;

  if (name == null) {
    throw new Error('createModel requires the "name" option.');
  }

  return (schema) => {
    const enhancedSchema = {
      ...schema,
      id: null,
    };

    let idIndex = -1;
    class BaseModel extends Record(enhancedSchema) {
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
        const modelizedData = mapValues(childModels, (modelName, prop) => (
          allModels.get('modelName').fromJS(data[prop])
        ));

        return new this(fromJS({
          ...data,
          ...modelizedData,
        }));
      }

      static createFromJS(data) {
        return this.create(fromJS(data));
      }
    }

    allModels.set(name, BaseModel);

    return BaseModel;
  };
}

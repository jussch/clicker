/**
 * Created by Justin on May 15, 2018
*/
import { Record, fromJS, Map } from 'immutable';
import mapValues from 'lodash/mapValues';
import { getModel } from './allModels';

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
        const immData = Map(data);
        const singleModelizedData = mapValues(childModels, (modelName, prop) => (
          getModel(modelName).fromJS(immData.get(prop))
        ));

        return new this(fromJS(data)).merge(singleModelizedData);
      }

      static createFromJS(data) {
        const immData = Map(data);
        const singleModelizedData = mapValues(childModels, (modelName, prop) => (
          getModel(modelName).createFromJS(immData.get(prop))
        ));

        return this.create(fromJS(data)).merge(singleModelizedData);
      }

      static getModelName() {
        return name;
      }
    }

    return BaseModel;
  };
}

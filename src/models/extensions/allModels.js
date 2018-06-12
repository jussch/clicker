/**
 * Created by Justin on 6/11/2018.
 */
import each from 'lodash/each';

const allModels = new Map();

export function getModel(modelName) {
  if (!allModels.has(modelName)) {
    throw new Error(`Model name "${modelName}" does not exist.`);
  }

  return allModels.get(modelName);
}

export function setModel(modelName, Model) {
  if (allModels.has(modelName)) {
    throw new Error(`Model name conflict: the model name "${modelName}" already exists.`);
  }

  console.log(`Setting model: ${modelName}`);

  allModels.set(modelName, Model);
}

export function loadModels(models) {
  each(models, (Model) => setModel(Model.getModelName(), Model));
}

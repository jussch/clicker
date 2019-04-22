/**
 * Created by Justin-Desktop on 5/16/2018.
 */
import { handleActions } from 'redux-actions';
import { Map } from 'immutable';
import fromPairs from 'lodash/fromPairs';
import Resource from '../models/Resource';
import { ALL_RESOURCES } from '../constants/Resources';
import { COMPLETE_TRANSACTION } from '../actions/TransactionActions';
import {
  UPDATE_RESOURCE,
  PROGRESS_RESOURCES,
  ADD_RESOURCE,
  SET_RESOURCE_RATES,
} from '../actions/ResourceActions';

export const initialState = Map(fromPairs(ALL_RESOURCES.map(resourceInfo => (
  [resourceInfo.get('name'), Resource.create({ name: resourceInfo.get('name') })]
))));

export default handleActions({
  [UPDATE_RESOURCE](state, action) {
    const { resource, type } = action.payload;
    return state.mergeIn([type], resource);
  },

  [ADD_RESOURCE](state, action) {
    const { amount, type } = action.payload;
    return state.updateIn([type, 'amount'], currentAmount => currentAmount + amount);
  },

  [PROGRESS_RESOURCES](state, action) {
    const deltaTime = action.payload;
    return state.map(resource => (
      resource.update('amount', amount => resource.getTotalRate() * deltaTime + amount)
    ));
  },

  [SET_RESOURCE_RATES](state, action) {
    const resourceRates = Map(action.payload);
    return state.map((resource) => {
      const resourceRate = resourceRates.get(resource.get('name'));
      if (resourceRate == null) return resource;

      return resource.set('gainPerSecond', resourceRate);
    });
  },

  // Transactions
  [COMPLETE_TRANSACTION](state, action) {
    const { resources } = action.payload;
    return state.map((resource) => {
      const cost = resources[resource.get('name')];
      if (!cost || cost <= 0) return resource;

      return resource.update('amount', amount => amount - cost);
    });
  },
}, initialState)

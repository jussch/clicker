/**
 * Created by Justin-Desktop on 5/16/2018.
 */
import { handleActions } from 'redux-actions';
import { Map } from 'immutable';
import Resource from '../models/Resource';
import {
  UPDATE_RESOURCE,
  PROGRESS_RESOURCES, ADD_RESOURCE,
} from '../actions/ResourceActions';

export const initialState = Map({
  gold: new Resource(),
  wood: new Resource(),
  food: new Resource(),
});

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
      resource.update('amount', amount => resource.get('perSecond') * deltaTime + amount)
    ));
  },
}, initialState)

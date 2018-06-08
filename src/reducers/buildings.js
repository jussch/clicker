/**
 * Created by Justin on 5/19/2018.
 */
import { handleActions } from 'redux-actions';
import { Map } from 'immutable';
import fromPairs from 'lodash/fromPairs';
import { ALL_BUILDINGS } from '../constants/Buildings';
import Building from '../models/Building';
import { COMPLETE_TRANSACTION } from '../actions/TransactionActions';

export const initialState = Map(fromPairs(ALL_BUILDINGS.map(buildingInfo => (
  [buildingInfo.get('name'), Building.create({ name: buildingInfo.get('name') })]
))));

export default handleActions({
  // Transactions
  [COMPLETE_TRANSACTION](state, action) {
    const { buildings = {} } = action.payload;

    return state.map((building) => {
      const addedQuantity = buildings[building.get('name')];
      if (!addedQuantity || addedQuantity <= 0) return building;

      return building.update('quantity', quantity => (
        quantity + addedQuantity
      ));
    });
  }
}, initialState);

/**
 * Created by Justin on 5/22/2018.
 */
import { Map } from 'immutable';
import { selectBuildings } from '../selectors/BuildingSelectors';
import { selectResources } from '../selectors/ResourceSelectors';
import { ALL_BUILDINGS } from '../constants/Buildings';
import {
  MAKE_TRANSACTION,
  completeTransaction,
} from '../actions/TransactionActions';

export default function processTransactions({ getState, dispatch }) {
  return next => action => {
    const returnValue = next(action);

    if (action.type === MAKE_TRANSACTION) {
      const {
        buildings: requestedBuildings = {},
      } = action.payload;

      const state = getState();
      const buildings = selectBuildings(state);

      let totalCost = Map();

      // Add Building Prices
      ALL_BUILDINGS.forEach((buildingInfo) => {
        const {
          name,
        } = buildingInfo;

        const purchaseQuantity = requestedBuildings[name];
        if (!purchaseQuantity) return;

        const currentBuilding = buildings.get(name);
        totalCost = addCosts(totalCost, currentBuilding.getQuantityCost(purchaseQuantity));
      });

      // Check resources to make sure purchase is possible.
      const resources = selectResources(state);
      if (isValidPurchase(totalCost, resources)) {
        // Final dispatch
        dispatch(completeTransaction({
          ...action.payload,
          resources: totalCost.toObject(),
        }));
      }
    }

    return returnValue;
  };
}

function addCosts(cost1, cost2) {
  return cost1.mergeWith(
    (oldVal, newVal) => oldVal + newVal,
    cost2,
  );
}

function isValidPurchase(cost, resources) {
  return cost.every((resourceCost, resourceName) => (
    resources.getIn([resourceName, 'amount']) >= resourceCost
  ));
}

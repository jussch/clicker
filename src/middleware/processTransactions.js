/**
 * Created by Justin on 5/22/2018.
 */
import { Map } from 'immutable';
import addMaps from '../utilities/immutable/addMaps';
import isValidPurchase from '../utilities/resources/isValidPurchase';
import { selectBuildings } from '../selectors/BuildingSelectors';
import { selectUpgrades } from '../selectors/UpgradeSelectors';
import { selectResources } from '../selectors/ResourceSelectors';
import { ALL_BUILDINGS } from '../constants/Buildings';
import { ALL_UPGRADES } from '../constants/Upgrades';
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
        upgrades: requestedUpgrades = {},
      } = action.payload;

      const state = getState();
      const buildings = selectBuildings(state);
      const upgrades = selectUpgrades(state);

      let totalCost = Map();

      // Add Building Prices
      ALL_BUILDINGS.forEach((buildingInfo) => {
        const name = buildingInfo.get('name');

        const purchaseQuantity = requestedBuildings[name];
        if (!purchaseQuantity) return;

        const currentBuilding = buildings.get(name);
        totalCost = addMaps(totalCost, currentBuilding.getQuantityCost(purchaseQuantity));
      });

      // Add Upgrade Prices
      ALL_UPGRADES.forEach((upgradeInfo) => {
        const name = upgradeInfo.get('name');

        const purchaseQuantity = requestedUpgrades[name];
        if (!purchaseQuantity) return;

        const currentUpgrade = upgrades.get(name);
        totalCost = addMaps(totalCost, currentUpgrade.getQuantityCost(purchaseQuantity));
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

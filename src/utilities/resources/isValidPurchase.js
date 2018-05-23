/**
 * Created by Justin on 5/22/2018.
 */

export default function isValidPurchase(cost, resources) {
  return cost.every((resourceCost, resourceName) => (
    resources.getIn([resourceName, 'amount']) >= resourceCost
  ));
}

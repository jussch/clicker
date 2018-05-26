/**
 * Created by Justin on 5/26/2018.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import pluralize from 'pluralize';
import CustomPropTypes from '../../../../CustomPropTypes';
import { selectUpgrade } from '../../../../selectors/UpgradeSelectors';
import { makeTransaction } from '../../../../actions/TransactionActions';
import NumberDisplay from '../../../Library/NumberDisplay';
import Button from '../../../Library/Button';
import CostDisplay from '../../../Resources/CostDisplay';
import { selectIsValidCost } from '../../../../selectors/ResourceSelectors';

function UpgradePanelItem(props) {
  const {
    upgrade,
    handleBuy,
    isPurchasable,
  } = props;

  const upgradeInfo = upgrade.getUpgradeInfo();
  const computedCost = upgrade.getComputedCost();

  return (
    <div>
      <div>
        <div>
          {pluralize(upgradeInfo.get('displayName'))}: <NumberDisplay value={upgrade.get('level')} />
        </div>
        <CostDisplay cost={computedCost} />
      </div>
      <div>
        <Button
          success
          disabled={!isPurchasable}
          label="Buy"
          onClick={handleBuy}
        />
      </div>
    </div>
  );
}

UpgradePanelItem.propTypes = {
  upgradeName: PropTypes.string.isRequired,

  // connect
  upgrade: CustomPropTypes.upgrade,
  isPurchasable: PropTypes.bool,
  actions: PropTypes.objectOf(PropTypes.func),

  // withPropsOnChange
  handleBuy: PropTypes.func,
};

function mapStateToProps(state, props) {
  const upgrade = selectUpgrade(props.upgradeName)(state);

  return {
    upgrade,
    isPurchasable: selectIsValidCost(upgrade.getComputedCost())(state),
  };
}

function mapActionsToProps(dispatch) {
  return {
    actions: bindActionCreators({
      makeTransaction,
    }, dispatch),
  };
}

const enhance = compose(
  connect(mapStateToProps, mapActionsToProps),
  withHandlers({
    handleBuy: ({ actions, upgradeName }) => () => {
      actions.makeTransaction({ upgrades: { [upgradeName]: 1 } });
    },
  }),
);

export default enhance(UpgradePanelItem);

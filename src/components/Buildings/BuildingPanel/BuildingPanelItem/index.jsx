/**
 * Created by Justin on 5/20/2018.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { selectBuilding } from '../../../../selectors/BuildingSelectors';
import CustomPropTypes from '../../../../CustomPropTypes';
import CostDisplay from '../../../Resources/CostDisplay';
import NumberDisplay from '../../../Library/NumberDisplay';
import Button from '../../../Library/Button';
import { makeTransaction } from '../../../../actions/TransactionActions';

function BuildingPanelItem(props) {
  const {
    building,
    handleBuy,
  } = props;

  const buildingInfo = building.getBuildingInfo();
  const computedCost = building.getComputedCost();

  return (
    <div>
      <div>
        <div>
          {buildingInfo.displayName}: <NumberDisplay value={building.get('quantity')} />
        </div>
        <CostDisplay cost={computedCost} />
      </div>
      <div>
        <Button
          success
          label="Buy"
          onClick={handleBuy}
        />
      </div>
    </div>
  );
}

BuildingPanelItem.propTypes = {
  buildingName: PropTypes.string.isRequired,

  // connect
  building: CustomPropTypes.building,
  actions: PropTypes.objectOf(PropTypes.func),

  // withHandlers
  handleBuy: PropTypes.func,
};

function mapStateToProps(state, props) {
  return {
    building: selectBuilding(props.buildingName)(state),
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
    handleBuy: ({ actions, buildingName }) => () => {
      actions.makeTransaction({ buildings: { [buildingName]: 1 } });
    },
  }),
);

export default enhance(BuildingPanelItem);

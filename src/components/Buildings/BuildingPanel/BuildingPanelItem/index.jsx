/**
 * Created by Justin on 5/20/2018.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { selectBuilding } from '../../../../selectors/BuildingSelectors';
import CustomPropTypes from '../../../../CustomPropTypes';
import CostDisplay from '../../../Resources/CostDisplay';
import Button from '../../../Library/Button';

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
        <div>{buildingInfo.displayName}</div>
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

  // withHandlers
  handleBuy: PropTypes.func,
};

function mapStateToProps(state, props) {
  return {
    building: selectBuilding(props.buildingName)(state),
  };
}

const enhance = compose(
  connect(mapStateToProps, null),
  withHandlers({
    handleBuy: () => () => {
      console.log('Building bought!');
    },
  }),
);

export default enhance(BuildingPanelItem);

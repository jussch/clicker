/**
 * Created by Justin on 5/20/2018.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { selectBuilding } from '../../../../selectors/BuildingSelectors';
import CustomPropTypes from '../../../../CustomPropTypes';

function BuildingPanelItem(props) {
  const {
    building,
  } = props;

  const buildingInfo = building.getBuildingInfo();
  const computedCost = building.getComputedCost();

  return (
    <div>
      <span>{buildingInfo.displayName}</span>
    </div>
  );
}

BuildingPanelItem.propTypes = {
  buildingName: PropTypes.string.isRequired,

  // connect
  building: CustomPropTypes.building,
};

function mapStateToProps(state, props) {
  return {
    building: selectBuilding(props.buildingName)(state),
  };
}

const enhance = compose(
  connect(mapStateToProps, null),
);

export default enhance(BuildingPanelItem);

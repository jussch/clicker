/**
 * Created by Justin on 4/17/2019.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ResourcePanel from '../../Resources/ResourcePanel';
import BuildingPanel from '../../Buildings/BuildingPanel';
import UpgradePanel from '../../Upgrades/UpgradePanel';

function VillagePanel(props) {
  return (
    <div>
      <ResourcePanel />
      <BuildingPanel />
      <UpgradePanel />
    </div>
  );
}

VillagePanel.propTypes = {
  // connect
  actions: PropTypes.objectOf(PropTypes.func),
};

function mapStateToProps(state) {
  return {};
}

function mapActionsToProps(dispatch) {
  return {
    actions: bindActionCreators({}, dispatch),
  };
}

const enhance = compose(
  connect(mapStateToProps, mapActionsToProps),
);

export default enhance(VillagePanel);

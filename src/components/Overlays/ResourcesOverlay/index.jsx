/**
 * Created by Justin on 4/21/2019.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ResourcePanel from '../../Resources/ResourcePanel';

function ResourcesOverlay(props) {
  return (
    <ResourcePanel />
  );
}

ResourcesOverlay.propTypes = {
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

export default enhance(ResourcesOverlay);

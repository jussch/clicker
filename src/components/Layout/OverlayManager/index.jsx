/**
 * Created by Justin on 4/20/2019.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function OverlayManager(props) {
  return (
    <div>
      
    </div>
  );
}

OverlayManager.propTypes = {
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

export default enhance(OverlayManager);

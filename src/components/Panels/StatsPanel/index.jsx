/**
 * Created by Justin on 4/18/2019.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function StatsPanel(props) {
  return (
    <div>

    </div>
  );
}

StatsPanel.propTypes = {
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

export default enhance(StatsPanel);

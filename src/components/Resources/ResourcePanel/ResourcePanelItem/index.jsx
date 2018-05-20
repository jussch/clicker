/**
 * Created by Justin on 5/19/2018.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { selectResource } from '../../../../selectors/ResourceSelectors';
import CustomPropTypes from '../../../../CustomPropTypes';

function ResourcePanelItem(props) {
  return (
    <div>
      <span></span>
    </div>
  );
}

ResourcePanelItem.propTypes = {
  resourceName: PropTypes.string.isRequired,

  // connect
  resource: CustomPropTypes.resource,
};

function mapStateToProps(state, props) {
  return {
    resource: selectResource(props.resourceName)(state),
  };
}

const enhance = compose(
  connect(mapStateToProps)
);

export default enhance(ResourcePanelItem);

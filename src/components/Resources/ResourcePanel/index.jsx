/**
 * Created by Justin on 5/19/2018.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import ResourcePanelItem from './ResourcePanelItem';
import { ALL_RESOURCES } from '../../../constants/Resources';

function ResourcePanel(props) {
  return (
    <div>
      <h3>Resources</h3>
      <div>
        {ALL_RESOURCES.map(resourceInfo => (
          <ResourcePanelItem
            resourceName={resourceInfo.name}
          />
        ))}
      </div>
    </div>
  );
}

ResourcePanel.propTypes = {

};

function mapStateToProps(state) {
  return {

  };
}

const enhance = compose(
  connect(mapStateToProps, null),
);

export default enhance(ResourcePanel);

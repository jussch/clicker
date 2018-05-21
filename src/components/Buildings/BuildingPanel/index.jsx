/**
 * Created by Justin on 5/20/2018.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { ALL_BUILDINGS } from '../../../constants/Buildings';
import BuildingPanelItem from './BuildingPanelItem';

function BuildingPanel(props) {
  return (
    <div>
      <h3>Buildings</h3>
      <div>
        {ALL_BUILDINGS.map(buildingInfo => (
          <BuildingPanelItem
            key={buildingInfo.name}
            buildingName={buildingInfo.name}
          />
        ))}
      </div>
    </div>
  );
}

BuildingPanel.propTypes = {};

const enhance = compose();

export default enhance(BuildingPanel);

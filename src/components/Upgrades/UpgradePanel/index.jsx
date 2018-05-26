/**
 * Created by Justin on 5/26/2018.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { ALL_UPGRADES } from '../../../constants/Upgrades';
import UpgradePanelItem from './UpgradePanelItem';

function UpgradePanel(props) {
  return (
    <div>
      <h3>Upgrades</h3>
      <div>
        {ALL_UPGRADES.map((upgradeInfo) => (
          <UpgradePanelItem
            key={upgradeInfo.get('name')}
            upgradeName={upgradeInfo.get('name')}
          />
        ))}
      </div>
    </div>
  )
}

UpgradePanel.propTypes = {};

const enhance = compose();

export default enhance(UpgradePanel);

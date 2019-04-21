/**
 * Created by Justin-Desktop on 5/15/2018.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import PanelSwitcher from '../PanelSwitcher';
import OverlayActivators from '../OverlayActivators';

import styles from './header.scss';

function Header(props) {
  return (
    <div className={styles.header}>
      <PanelSwitcher />
      <OverlayActivators />
    </div>
  )
}

Header.propTypes = {};

const enhance = compose();

export default enhance(Header);

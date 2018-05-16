/**
 * Created by Justin-Desktop on 5/15/2018.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import GoldDisplay from '../../Player/GoidDisplay';

import styles from './header.scss';

function Header(props) {
  return (
    <div className={styles.header}>
      Clicker Game
    </div>
  )
}

Header.propTypes = {};

const enhance = compose();

export default enhance(Header);

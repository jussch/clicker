/**
 * Created by Justin on 5/27/2018.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { selectPlayer } from '../../../selectors/PlayerSelectors';
import CustomPropTypes from '../../../CustomPropTypes';
import NumberDisplay from '../../Library/NumberDisplay';
import HpNumber from '../HpNumber';

import styles from './playerHud.scss';

function PlayerHud(props) {
  const {
    player,
  } = props;

  return (
    <div className={styles.normal}>
      <h4 className={styles.header}>Player</h4>
      <div className={styles.data}>
        Health: <HpNumber value={player.get('hp')} max={player.get('maxHp')} />
        {' / '}
        <NumberDisplay value={player.get('maxHp')}/>
      </div>
      <div className={styles.data}>
        Energy: <NumberDisplay value={player.get('energy')} /> / <NumberDisplay value={player.get('maxEnergy')}/>
      </div>
    </div>
  );
}

PlayerHud.propTypes = {
  // connect
  player: CustomPropTypes.player,
};

function mapStateToProps(state) {
  return {
    player: selectPlayer(state),
  }
}

const enhance = compose(
  connect(mapStateToProps, null),
);

export default enhance(PlayerHud);

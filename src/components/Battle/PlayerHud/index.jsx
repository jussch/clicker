/**
 * Created by Justin on 5/27/2018.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { selectPlayer } from '../../../selectors/PlayerSelectors';
import CustomPropTypes from '../../../CustomPropTypes';
import NumberDisplay from '../../Library/NumberDisplay'

function PlayerHud(props) {
  const {
    player,
  } = props;

  return (
    <div>
      <h4>Player</h4>
      <div>
        HP: <NumberDisplay value={player.get('hp')} />
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

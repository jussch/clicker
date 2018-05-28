/**
 * Created by Justin on 5/27/2018.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import PlayerHud from '../PlayerHud';
import PlayerActions from '../PlayerActions';

function BattleLayout(props) {
  return (
    <div>
      <PlayerHud />
      <PlayerActions />
    </div>
  );
}

BattleLayout.propTypes = {};

function mapStateToProps(state) {
  return {

  };
}

const enhance = compose(
  connect(mapStateToProps, null),
);

export default enhance(BattleLayout);

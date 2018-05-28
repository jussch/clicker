/**
 * Created by Justin on 5/27/2018.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import CommandButton from '../CommandButton';

function PlayerActions(props) {
  return (
    <div>
      <CommandButton
        commandName="Attack"
        description="Deals 10 damage."
        energyCost={10}
      />
      <CommandButton
        commandName="Block"
        description="Blocks 10 damage."
        energyCost={10}
      />
    </div>
  )
}

PlayerActions.propTypes = {};

function mapStateToProps(state) {
  return {

  };
}

function mapActionsToProps(dispatch) {
  return {

  };
}

const enhance = compose(
  connect(mapStateToProps, mapActionsToProps),
);

export default enhance(PlayerActions);

/**
 * Created by Justin on 6/10/2018.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '../../Library/Button';
import { endTurn } from '../../../actions/BattleActions';

function EndTurnButton(props) {
  const {
    handleEndTurn,
  } = props;

  return (
    <Button
      primary
      label="End Turn"
      onClick={handleEndTurn}
    />
  );
}

EndTurnButton.propTypes = {
  // connect
  actions: PropTypes.objectOf(PropTypes.func),

  // withHandlers
  handleEndTurn: PropTypes.func,
};

function mapStateToProps(state) {
  return {

  };
}

function mapActionsToProps(dispatch) {
  return {
    actions: bindActionCreators({
      endTurn,
    }, dispatch),
  };
}

const enhance = compose(
  connect(mapStateToProps, mapActionsToProps),

  withHandlers({
    handleEndTurn: ({ actions }) => () => {
      actions.endTurn();
    },
  })
);

export default enhance(EndTurnButton);

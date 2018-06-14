/**
 * Created by Justin on 5/27/2018.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { List } from 'immutable';
import { bindActionCreators } from 'redux';
import { setupBattle } from '../../../actions/BattleActions';
import Button from '../../Library/Button';
import Enemy from '../../../models/Enemy';

function BattleInitiator(props) {
  const {
    handleStartBattle,
  } = props;

  return (
    <Button
      primary
      label="Start a Battle"
      onClick={handleStartBattle}
    />
  );
}

BattleInitiator.propTypes = {
  // connect
  actions: PropTypes.objectOf(PropTypes.func),

  // withHandlers
  handleStartBattle: PropTypes.func,
};

function mapActionsToProps(dispatch) {
  return {
    actions: bindActionCreators({
      setupBattle,
    }, dispatch),
  };
}

const enhance = compose(
  connect(null, mapActionsToProps),

  withHandlers({
    handleStartBattle: ({ actions }) => () => {
      actions.setupBattle({
        enemies: List([
          Enemy.create({
            name: 'Rat',
            maxHp: 20,
            power: 13,
            defense: 5,
          }).resetState(),

          Enemy.create({
            name: 'Rat 2',
            maxHp: 25,
            power: 11,
            defense: 5,
          }).resetState(),
        ]),
        allies: List(),
      })
    },
  }),
);

export default enhance(BattleInitiator);

/**
 * Created by Justin-Desktop on 5/15/2018.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectCurrentGold, selectGoldPerSecond } from '../../selectors/ResourceSelectors';
import { updateGold } from '../../actions/ResourceActions';

function GoldDisplay(props) {
  const {
    gold,
    goldPerSecond,
    updateGoldPerSecond,
  } = props;

  const goldRounded = Math.floor(gold);

  return (
    <span>
      Gold: {goldRounded} (+{goldPerSecond.toFixed(2)}/s) <button onClick={updateGoldPerSecond}>Increase</button>
    </span>
  )
}

GoldDisplay.propTypes = {
  // connect
  gold: PropTypes.number,
  goldPerSecond: PropTypes.number,
  actions: PropTypes.objectOf(PropTypes.func),

  // withHandlers
  updateGoldPerSecond: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    gold: selectCurrentGold(state),
    goldPerSecond: selectGoldPerSecond(state),
  };
}

function mapActionsToProps(dispatch) {
  return {
    actions: bindActionCreators({
      updateGold,
    }, dispatch),
  };
}

const enhance = compose(
  connect(mapStateToProps, mapActionsToProps),
  withHandlers({
    updateGoldPerSecond: ({ actions, goldPerSecond }) => () => {
      actions.updateGold({ perSecond: goldPerSecond + 1 });
    },
  }),
);

export default enhance(GoldDisplay);

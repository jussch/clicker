/**
 * Created by Justin-Desktop on 5/15/2018.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { selectPlayerGold } from '../../selectors/PlayerSelectors';

function GoldDisplay(props) {
  const {
    gold,
  } = props;

  return (
    <span>Gold: {gold}</span>
  )
}

GoldDisplay.propTypes = {
  // connect
  gold: PropTypes.number,
};

function mapStateToProps(state) {
  return {
    gold: selectPlayerGold(state),
  };
}

const enhance = compose(
  connect(mapStateToProps),
);

export default enhance(GoldDisplay);

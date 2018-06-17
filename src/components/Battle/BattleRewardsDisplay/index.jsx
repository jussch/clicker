/**
 * Created by Justin on 6/17/2018.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import CustomPropTypes from '../../../CustomPropTypes';
import { selectRewards } from '../../../selectors/BattleSelectors';
import BattleReward from './BattleReward';
import acceptBattleReward from '../../../actions/thunks/battle/acceptBattleReward';

function BattleRewardsDisplay(props) {
  const {
    battleRewards,
    handleAcceptReward,
  } = props;

  if (!battleRewards || battleRewards.size === 0) return null;

  return (
    <div>
      <h3>Battle Rewards</h3>
      <div>
        {battleRewards.toArray().map((battleReward, index) => (
          <BattleReward
            key={battleReward.getId()}
            battleReward={battleReward}
            index={index}
            onAccept={handleAcceptReward}
          />
        ))}
      </div>
    </div>
  );
}

BattleRewardsDisplay.propTypes = {
  // connect
  battleRewards: ImmutablePropTypes.listOf(CustomPropTypes.battleReward),
  actions: PropTypes.objectOf(PropTypes.func),

  // withHandlers
  handleAcceptReward: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    battleRewards: selectRewards(state),
  };
}

function mapActionsToProps(dispatch) {
  return {
    actions: bindActionCreators({
      acceptBattleReward,
    }, dispatch),
  };
}

const enhance = compose(
  connect(mapStateToProps, mapActionsToProps),

  withHandlers({
    handleAcceptReward: ({ actions }) => ({ index }) => {
      actions.acceptBattleReward({ index });
    },
  }),
);

export default enhance(BattleRewardsDisplay);

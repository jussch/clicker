/**
 * Created by Justin on 5/27/2018.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CommandButton from '../CommandButton';
import { initiateAction } from '../../../actions/BattleActions';
import BattleAction from '../../../models/BattleAction';
import { selectQueuedAction } from '../../../selectors/BattleSelectors';
import CustomPropTypes from '../../../CustomPropTypes';
import {
  TARGET_ENEMY,
  TARGET_SELF,
  TYPE_BASIC,
  SUBTYPE_ATTACK,
  SUBTYPE_DEFENSE,
} from '../../../constants/BattleActions';

function PlayerActions(props) {
  const {
    queuedAction,
    handleBasicAttack,
    handleBasicBlock,
  } = props;

  return (
    <div>
      <CommandButton
        disabled={!!queuedAction}
        commandName="Attack"
        description="Deals 10 damage."
        energyCost={10}
        onClick={handleBasicAttack}
      />
      <CommandButton
        disabled={!!queuedAction}
        commandName="Block"
        description="Blocks 10 damage."
        energyCost={10}
        onClick={handleBasicBlock}
      />
    </div>
  )
}

PlayerActions.propTypes = {
  // connect
  queuedAction: CustomPropTypes.battleAction,
  actions: PropTypes.objectOf(PropTypes.func),

  // withHandlers
  handleBasicAttack: PropTypes.func,
  handleBasicBlock: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    queuedAction: selectQueuedAction(state),
  };
}

function mapActionsToProps(dispatch) {
  return {
    actions: bindActionCreators({
      initiateAction,
    }, dispatch),
  };
}

const enhance = compose(
  connect(mapStateToProps, mapActionsToProps),
  withHandlers({
    handleBasicAttack: ({ actions }) => () => {
      actions.initiateAction({
        action: BattleAction.createFromJS({
          type: TYPE_BASIC,
          subtype: SUBTYPE_ATTACK,
          scope: TARGET_ENEMY,
          energyCost: 10,
          effects: {
            damage: 10,
          },
        }),
      })
    },

    handleBasicBlock: ({ actions }) => () => {
      actions.initiateAction({
        action: BattleAction.createFromJS({
          type: TYPE_BASIC,
          subtype: SUBTYPE_DEFENSE,
          scope: TARGET_SELF,
          energyCost: 10,
          effects: {
            block: 10,
          },
        }),
      })
    },
  }),
);

export default enhance(PlayerActions);

/**
 * Created by Justin on 6/17/2018.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { compose, withHandlers } from 'recompose';
import CustomPropTypes from '../../../../CustomPropTypes';
import Button from '../../../Library/Button';

function BattleReward(props) {
  const {
    battleReward,
    handleAccept,
  } = props;

  return (
    <div>
      {battleReward.get('name')}
      {battleReward.get('quantity')}
      <Button
        success
        label="Accept"
        onClick={handleAccept}
      />
    </div>
  );
}

BattleReward.propTypes = {
  index: PropTypes.number.isRequired,
  battleReward: CustomPropTypes.battleReward.isRequired,
  onAccept: PropTypes.func,

  // withHandlers
  handleAccept: PropTypes.func,
};

const enhance = compose(
  withHandlers({
    handleAccept: ({ onAccept, index }) => () => {
      onAccept({ index });
    },
  }),
);

export default enhance(BattleReward);

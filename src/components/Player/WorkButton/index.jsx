/**
 * Created by Justin on 5/17/2018.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addGold } from '../../../actions/ResourceActions';
import Button from '../../Library/Button';

const GOLD_ADD = 1;

function WorkButton(props) {
  const {
    handlePerformWork,
  } = props;

  return (
    <Button
      primary
      label={`Perform Work (+${GOLD_ADD} Gold)`}
      onClick={handlePerformWork}
    />
  );
}

WorkButton.propTypes = {
  // connect
  actions: PropTypes.objectOf(PropTypes.func),

  // withHandlers
  handlePerformWork: PropTypes.func,
};

function mapActionsToProps(dispatch) {
  return {
    actions: bindActionCreators({
      addGold,
    }, dispatch),
  };
}

const enhance = compose(
  connect(null, mapActionsToProps),
  withHandlers({
    handlePerformWork: ({ actions }) => () => {
      actions.addGold(GOLD_ADD);
    },
  }),
);

export default enhance(WorkButton);

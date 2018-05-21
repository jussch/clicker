/**
 * Created by Justin on 5/20/2018.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import ImmutablePropTypes from 'react-immutable-proptypes';

function CostDisplay(props) {
  const {
    cost,
  } = props;

  return (
    <div>

    </div>
  );
}

CostDisplay.propTypes = {
  cost: ImmutablePropTypes.map.isRequired,
};

const enhance = compose();

export default enhance(CostDisplay);

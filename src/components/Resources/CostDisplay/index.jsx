/**
 * Created by Justin on 5/20/2018.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import ImmutablePropTypes from 'react-immutable-proptypes';
import CostDisplayItem from './CostDisplayItem';

function CostDisplay(props) {
  const {
    cost,
  } = props;

  return (
    <span>
      {cost.map((costValue, costName) => (
        <CostDisplayItem
          key={costName}
          resourceName={costName}
          costValue={costValue}
        />
      )).toArray()}
    </span>
  );
}

CostDisplay.propTypes = {
  cost: ImmutablePropTypes.map.isRequired,
};

const enhance = compose();

export default enhance(CostDisplay);

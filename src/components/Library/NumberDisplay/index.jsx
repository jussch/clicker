/**
 * Created by Justin on 5/20/2018.
 */
import React from 'react';
import PropTypes from 'prop-types';
import beautifyNumber from './beautifyNumber';

export default function NumberDisplay(props) {
  const {
    value,
    decimals = 1,
    expanded = false,
    ...otherProps
  } = props;

  const display = beautifyNumber(value, { decimals, expanded });

  return (
    <span {...otherProps}>
      {display}
    </span>
  );
}

NumberDisplay.propTypes = {
  value: PropTypes.number.isRequired,
  decimals: PropTypes.number,
  expanded: PropTypes.bool,
};

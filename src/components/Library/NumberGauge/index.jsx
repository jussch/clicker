/**
 * Created by Justin on 6/7/2018.
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import NumberDisplay from '../NumberDisplay';

export default function NumberGauge(props) {
  const {
    value,
    max,
    positions,
    className: givenClassName,
    ...otherProps
  } = props;

  const passedPositions = positions.filter(([percent]) => value < max * percent);
  const passedClasses = passedPositions.map(([,passedClassName]) => passedClassName);

  const className = classNames(givenClassName, passedClasses);

  return (
    <NumberDisplay
      {...otherProps}
      className={className}
      value={value}
    />
  );
}

NumberGauge.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  className: PropTypes.string,
  positions: PropTypes.arrayOf(PropTypes.array),
};

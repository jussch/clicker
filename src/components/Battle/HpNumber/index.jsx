/**
 * Created by Justin on 6/7/2018.
 */
import React from 'react';
import PropTypes from 'prop-types';
import NumberGauge from '../../Library/NumberGauge';
import classNames from 'classnames';

import styles from './hpNumber.scss';

const CLASS_POSITIONS = [
  [1, styles.damaged],
  [1 / 3, styles.critical],
];

export default function HpNumber(props) {
  const {
    value,
    max,
    className: givenClassName,
    ...otherProps
  } = props;

  const className = classNames(givenClassName, styles.hpValue);

  return (
    <NumberGauge
      {...otherProps}
      positions={CLASS_POSITIONS}
      value={value}
      max={max}
      className={className}
    />
  );
}

HpNumber.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  className: PropTypes.string,
};

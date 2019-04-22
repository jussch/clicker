/**
 * Created by Justin on 4/22/2019.
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import NumberDisplay from '../NumberDisplay';

import styles from './rateDisplay.scss';

export default function RateDisplay(props) {
  const {
    rate,
    className,
    ...otherProps
  } = props;

  const isPositive = rate > 0;
  const isNegative = rate < 0;

  let plusMinus = '';
  if (isPositive) {
    plusMinus = '+';
  } else if (isNegative) {
    plusMinus = '-';
  }

  const rateClass = classNames(className, {
    [styles.positive]: isPositive,
    [styles.negative]: isNegative,
  });

  return (
    <span {...otherProps} className={rateClass}>
      {plusMinus}<NumberDisplay value={rate} />/s
    </span>
  )
}

RateDisplay.propTypes = {
  rate: PropTypes.number.isRequired,
  className: PropTypes.string,
};

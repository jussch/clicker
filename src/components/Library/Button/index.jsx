/**
 * Created by Justin on 5/17/2018.
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './button.scss';

export default function Button(props) {
  const {
    className,
    label,
    primary,
    accent,
    success,
    fullWidth,
    disabled,
    ...otherProps
  } = props;

  const computedClass = classNames(className, styles.normal, {
    [styles.primary]: primary,
    [styles.accent]: accent,
    [styles.success]: success,
    [styles.fullWidth]: fullWidth,
  });

  return (
    <button {...otherProps} className={computedClass} disabled={disabled}>
      {label}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  primary: PropTypes.bool,
  accent: PropTypes.bool,
  success: PropTypes.bool,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
};

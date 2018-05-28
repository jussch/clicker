/**
 * Created by Justin on 5/27/2018.
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './commandButton.scss';

export default function CommandButton(props) {
  const {
    className,
    commandName,
    energyCost,
    description,
    ...otherProps
  } = props;

  const buttonClass = classNames(className, styles.button);

  return (
    <button className={buttonClass} {...otherProps}>
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.name}>{commandName}</span>
          <span className={styles.cost}>{energyCost}</span>
        </div>
        <div className={styles.description}>
          {description}
        </div>
      </div>
    </button>
  );
}

CommandButton.propTypes = {
  className: PropTypes.string,
  commandName: PropTypes.string,
  energyCost: PropTypes.number,
  description: PropTypes.node,
};

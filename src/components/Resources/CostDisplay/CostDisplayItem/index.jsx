/**
 * Created by Justin on 5/20/2018.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { selectResource } from '../../../../selectors/ResourceSelectors';
import NumberDisplay from '../../../Library/NumberDisplay';

import styles from './costDisplayItem.scss';

function CostDisplayItem(props) {
  const {
    resource,
    costValue,
  } = props;

  const resourceInfo = resource.getResourceInfo();
  const amount = resource.get('amount');

  const notEnough = costValue > amount;
  const hasEnough = costValue <= amount;

  const itemClass = classNames(styles.item, {
    [styles.hasEnough]: hasEnough,
    [styles.notEnough]: notEnough,
  });

  return (
    <span className={itemClass}>
      {notEnough && (
        <span>
          <NumberDisplay value={amount} />{' / '}
        </span>
      )}
      <NumberDisplay className={styles.value} value={costValue} />
      <span className={styles.name}>
        {` ${resourceInfo.get('displayName')}`}
      </span>
    </span>
  );
}

CostDisplayItem.propTypes = {
  costValue: PropTypes.number.isRequired,
  resourceName: PropTypes.string.isRequired,
};

function mapStateToProps(state, props) {
  return {
    resource: selectResource(props.resourceName)(state),
  };
}

const enhance = compose(
  connect(mapStateToProps, null),
);

export default enhance(CostDisplayItem);

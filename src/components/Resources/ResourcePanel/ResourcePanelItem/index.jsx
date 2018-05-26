/**
 * Created by Justin on 5/19/2018.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { selectResource } from '../../../../selectors/ResourceSelectors';
import CustomPropTypes from '../../../../CustomPropTypes';
import NumberDisplay from '../../../Library/NumberDisplay';

import styles from './resourcePanelItem.scss';

function ResourcePanelItem(props) {
  const {
    resource,
  } = props;

  const resourceInfo = resource.getResourceInfo();

  return (
    <div className={styles.item}>
      <span className={styles.name}>
        {resourceInfo.get('displayName')}:
      </span>
      <NumberDisplay value={resource.get('amount')} className={styles.value} />
      <span className={styles.rate}>
        (+<NumberDisplay value={resource.get('perSecond')} />/s)
      </span>
    </div>
  );
}

ResourcePanelItem.propTypes = {
  resourceName: PropTypes.string.isRequired,

  // connect
  resource: CustomPropTypes.resource,
};

function mapStateToProps(state, props) {
  return {
    resource: selectResource(props.resourceName)(state),
  };
}

const enhance = compose(
  connect(mapStateToProps, null)
);

export default enhance(ResourcePanelItem);

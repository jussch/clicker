/**
 * Created by Justin on 4/16/2019.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import getPanelByType from '../../Panels/getPanelByType';
import { selectActivePanel } from '../../../selectors/ViewSelectors';

import styles from './panelManager.scss';

function PanelManager(props) {
  const {
    panelType,
  } = props;

  const Panel = getPanelByType(panelType);

  return (
    <div className={styles.manager}>
      <Panel />
    </div>
  );
}

PanelManager.propTypes = {
  // connect
  panelType: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    panelType: selectActivePanel(state),
  }
}

const enhance = compose(
  connect(mapStateToProps),
);

export default enhance(PanelManager);

/**
 * Created by Justin on 4/20/2019.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectActiveOverlaysList } from '../../../selectors/ViewSelectors';
import getOverlayByType from '../../Overlays/getOverlayByType';

import styles from './overlayManager.scss';

function OverlayManager(props) {
  const {
    activeOverlays,
  } = props;

  return ReactDOM.createPortal(
    <div className={styles.manager}>
      {activeOverlays.toArray().map((activeOverlay) => {
        const Overlay = getOverlayByType(activeOverlay);

        return (
          <div className={styles.overlay} key={activeOverlay}>
            <Overlay />
          </div>
        );
      })}
    </div>,
    document.body,
  );
}

OverlayManager.propTypes = {
  // connect
  activeOverlays: ImmutablePropTypes.listOf(PropTypes.string),
  actions: PropTypes.objectOf(PropTypes.func),
};

function mapStateToProps(state) {
  return {
    activeOverlays: selectActiveOverlaysList(state),
  };
}

function mapActionsToProps(dispatch) {
  return {
    actions: bindActionCreators({}, dispatch),
  };
}

const enhance = compose(
  connect(mapStateToProps, mapActionsToProps),
);

export default enhance(OverlayManager);

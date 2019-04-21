/**
 * Created by Justin on 4/21/2019.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '../../Library/Button';
import { toggleOverlayMenu } from '../../../actions/ViewActions';
import { ALL_OVERLAYS } from '../../../constants/ViewTypes';

function OverlayActivators(props) {
  const {
    actions,
  } = props;

  return (
    <ul>
      {ALL_OVERLAYS.map(overlay => (
        <li key={overlay}>
          <Button
            label={overlay}
            onClick={() => actions.toggleOverlayMenu({ overlay })}
          />
        </li>
      ))}
    </ul>
  )
}

OverlayActivators.propTypes = {
  // connect
  actions: PropTypes.objectOf(PropTypes.func),
};

function mapStateToProps(state) {
  return {};
}

function mapActionsToProps(dispatch) {
  return {
    actions: bindActionCreators({
      toggleOverlayMenu,
    }, dispatch),
  };
}

const enhance = compose(
  connect(mapStateToProps, mapActionsToProps),
);

export default enhance(OverlayActivators);

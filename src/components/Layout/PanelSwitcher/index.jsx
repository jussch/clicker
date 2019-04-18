/**
 * Created by Justin on 4/17/2019.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ALL_PANELS, PANEL_NAMES } from '../../../constants/ViewTypes';
import Button from '../../Library/Button';
import { selectActivePanel } from '../../../selectors/ViewSelectors';
import { changeActivePanel } from '../../../actions/ViewActions';

import styles from './panelSwitcher.scss';

function PanelSwitcher(props) {
  const {
    activePanel,
    actions,
  } = props;

  return (
    <ul className={styles.container}>
      {ALL_PANELS.map(panelType => (
        <li className={styles.item} key={panelType}>
          <Button
            label={PANEL_NAMES[panelType]}
            disabled={activePanel === panelType}
            onClick={() => actions.changeActivePanel({ panel: panelType })}
          />
        </li>
      ))}
    </ul>
  )
}

PanelSwitcher.propTypes = {
  // connect
  activePanel: PropTypes.string,
  actions: PropTypes.objectOf(PropTypes.func),
};

function mapStateToProps(state) {
  return {
    activePanel: selectActivePanel(state),
  };
}

function mapActionsToProps(dispatch) {
  return {
    actions: bindActionCreators({
      changeActivePanel,
    }, dispatch),
  };
}

const enhance = compose(
  connect(mapStateToProps, mapActionsToProps),
);

export default enhance(PanelSwitcher);

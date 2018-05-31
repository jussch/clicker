/**
 * Created by Justin on 5/30/2018.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectEnemy } from '../../../selectors/BattleSelectors';

function EnemyHud(props) {


  return (
    <div>

    </div>
  );
}

EnemyHud.propTypes = {
  enemyIndex: PropTypes.number.isRequired,

  // connect
  actions: PropTypes.objectOf(PropTypes.func),
};

function mapStateToProps(state, props) {
  return {
    enemy: selectEnemy(props.enemyIndex)(state),
  };
}

function mapActionsToProps(dispatch) {
  return {
    actions: bindActionCreators({

    }, dispatch),
  }
}

const enhance = compose(
  connect(mapStateToProps, mapActionsToProps),
);

export default enhance(EnemyHud);

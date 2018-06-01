/**
 * Created by Justin on 5/30/2018.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectEnemy } from '../../../selectors/BattleSelectors';
import NumberDisplay from '../../Library/NumberDisplay';

import styles from './enemyHud.scss';

function EnemyHud(props) {
  const {
    enemy,
  } = props;

  return (
    <div className={styles.wrapper}>
      <h4 className={styles.name}>{enemy.get('name')}</h4>
      <div className={styles.data}>
        <div className={styles.dataRow}>
          <span className={styles.dataKey}>HP: </span>
          <NumberDisplay value={enemy.get('hp')} className={styles.dataValue} />
          {' / '}
          <NumberDisplay value={enemy.get('maxHp')} className={styles.dataMax}/>
        </div>
      </div>
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

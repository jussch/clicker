/**
 * Created by Justin on 5/30/2018.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectEnemy, selectQueuedAction } from '../../../selectors/BattleSelectors';
import NumberDisplay from '../../Library/NumberDisplay';
import { selectTarget } from '../../../actions/BattleActions';
import { AFF_ENEMY } from '../../../constants/BattleActions';
import Button from '../../Library/Button';
import CustomPropTypes from '../../../CustomPropTypes';

import styles from './enemyHud.scss';

function EnemyHud(props) {
  const {
    enemy,
    hasQueuedAction,
    handleSelectTarget,
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
      <div className={styles.actions}>
        <Button
          primary
          disabled={!hasQueuedAction}
          label="Select"
          onClick={handleSelectTarget}
        />
      </div>
    </div>
  );
}

EnemyHud.propTypes = {
  enemyIndex: PropTypes.number.isRequired,

  // connect
  enemy: CustomPropTypes.enemy,
  hasQueuedAction: PropTypes.bool,
  actions: PropTypes.objectOf(PropTypes.func),

  // withHandlers
  handleSelectTarget: PropTypes.func,
};

function mapStateToProps(state, props) {
  return {
    enemy: selectEnemy(props.enemyIndex)(state),
    hasQueuedAction: !!selectQueuedAction(state),
  };
}

function mapActionsToProps(dispatch) {
  return {
    actions: bindActionCreators({
      selectTarget,
    }, dispatch),
  }
}

const enhance = compose(
  connect(mapStateToProps, mapActionsToProps),

  withHandlers({
    handleSelectTarget: ({ actions, enemyIndex }) => () => {
      actions.selectTarget({
        index: enemyIndex,
        type: AFF_ENEMY,
      });
    },
  }),
);

export default enhance(EnemyHud);

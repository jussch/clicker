/**
 * Created by Justin on 5/30/2018.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classNames from 'classnames';
import { selectEnemy, selectQueuedAction } from '../../../selectors/BattleSelectors';
import NumberDisplay from '../../Library/NumberDisplay';
import { selectTarget } from '../../../actions/BattleActions';
import { AFF_ENEMY } from '../../../constants/BattleActions';
import Button from '../../Library/Button';
import CustomPropTypes from '../../../CustomPropTypes';
import HpNumber from '../HpNumber';

import styles from './enemyHud.scss';

function EnemyHud(props) {
  const {
    enemy,
    hasQueuedAction,
    handleSelectTarget,
  } = props;

  const isDead = enemy.isDead();
  const isCritical = enemy.isCritical();
  const isDamaged = enemy.isDamaged();

  const nameClass = classNames(styles.name, {
    [styles.dead]: isDead,
  });

  return (
    <div className={styles.wrapper}>
      <h4 className={nameClass}>{enemy.get('name')} {isDead && '(Dead)'}</h4>
      <div className={styles.data}>
        <div className={styles.dataRow}>
          <span className={styles.dataKey}>HP: </span>
          <HpNumber value={enemy.get('hp')} max={enemy.get('maxHp')} className={styles.dataValue} />
          {' / '}
          <NumberDisplay value={enemy.get('maxHp')} className={styles.dataMax}/>
        </div>
      </div>
      <div className={styles.actions}>
        <Button
          primary
          disabled={!hasQueuedAction || isDead}
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
    handleSelectTarget: ({ actions, enemy }) => () => {
      actions.selectTarget({
        id: enemy.getId(),
        type: AFF_ENEMY,
      });
    },
  }),
);

export default enhance(EnemyHud);

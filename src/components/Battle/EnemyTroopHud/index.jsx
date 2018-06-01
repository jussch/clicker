/**
 * Created by Justin on 5/30/2018.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import times from 'lodash/times';
import { selectNumEnemies } from '../../../selectors/BattleSelectors';
import EnemyHud from '../EnemyHud';

function EnemyTroopHud(props) {
  const {
    numEnemies,
  } = props;

  return (
    <div>
      <h3>Enemies</h3>
      <div>
        {times(numEnemies, index => (
          <EnemyHud
            key={index}
            enemyIndex={index}
          />
        ))}
      </div>
    </div>
  );
}

EnemyTroopHud.propTypes = {
  // connect
  numEnemies: PropTypes.number,
};

function mapStateToProps(state) {
  return {
    numEnemies: selectNumEnemies(state),
  }
}

const enhance = compose(
  connect(mapStateToProps, null),
);

export default enhance(EnemyTroopHud);

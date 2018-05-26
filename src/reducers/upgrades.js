/**
 * Created by Justin on 5/19/2018.
 */
import { handleActions } from 'redux-actions';
import { Map } from 'immutable';
import fromPairs from 'lodash/fromPairs';
import { ALL_UPGRADES } from '../constants/Upgrades';
import Upgrade from '../models/Upgrade';
import { COMPLETE_TRANSACTION } from '../actions/TransactionActions';

export const initialState = Map(fromPairs(ALL_UPGRADES.map(upgradeInfo => (
  [upgradeInfo.get('name'), Upgrade.create({ name: upgradeInfo.get('name') })]
))));

export default handleActions({
  // Transactions
  [COMPLETE_TRANSACTION](state, action) {
    const { upgrades = {} } = action.payload;

    return state.map((upgrade) => {
      const addedLevels = upgrades[upgrade.get('name')];
      if (!addedLevels || addedLevels <= 0) return upgrade;

      return upgrade.update('level', level => (
        level + addedLevels
      ));
    });
  }
}, initialState);

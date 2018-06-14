/**
 * Created by Justin on 5/19/2018.
 */
import { compose } from 'recompose';
import createModel from './extensions/createModel';
import { REWARD_ITEM, REWARD_RESOURCE } from '../constants/BattleRewards';

const BattleRewardSchema = {
  type: null,
  name: null,
  quantity: 1,
};

const enhance = compose(
  createModel({
    name: 'BattleReward',
  }),
);

export default class BattleReward extends enhance(BattleRewardSchema) {
  isResourceReward() {
    return this.get('type') === REWARD_RESOURCE;
  }

  isItemReward() {
    return this.get('type') === REWARD_ITEM;
  }

  setResourceReward() {
    return this.set('type', REWARD_RESOURCE);
  }

  setItemReward() {
    return this.set('type', REWARD_ITEM);
  }
}

/**
 * Created by Justin on 6/17/2018.
 */
import { selectRewards } from '../../../selectors/BattleSelectors';
import { takeReward } from '../../BattleActions';
import { addResource } from '../../ResourceActions';

export default function acceptBattleReward({ index }) {
  return (dispatch, getState) => {
    const rewards = selectRewards(getState());
    const reward = rewards.get(index);

    dispatch(takeReward({ index }));

    if (reward.isResourceReward()) {
      dispatch(addResource({ type: reward.get('name'), amount: reward.get('quantity') }));
    } else if (reward.isItemReward()) {
      throw new Error('Cannot handle item rewards yet.');
    }
  };
}

/**
 * Created by Justin on 5/26/2018.
 */
import { fromJS } from 'immutable';
import Cost from '../../models/Cost';

export default function createInfo(baseInfo) {
  return fromJS({
    ...baseInfo,
    cost: new Cost(baseInfo.cost),
  });
}

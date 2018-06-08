/**
 * Created by Justin on 5/26/2018.
 */
import { fromJS } from 'immutable';
import Cost from '../../models/Cost';
import createModel from '../../models/extensions/createModel';

export default function createInfo(baseInfo) {
  let costProps = {};

  if (baseInfo.cost != null) {
    costProps = { cost: Cost.createFromJS(baseInfo.cost) };
  }

  return fromJS({
    ...baseInfo,
    ...costProps,
  });
}

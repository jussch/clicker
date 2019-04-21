/**
 * Created by Justin on 4/21/2019.
 */
import ResourcesOverlay from './ResourcesOverlay';
import {
  RESOURCE_OVERLAY,
} from '../../constants/ViewTypes';

export default function getOverlayByType(overlay) {
  switch (overlay) {
    case RESOURCE_OVERLAY:
      return ResourcesOverlay;
    default:
      throw new RangeError(`Invalid overlay type: "${overlay}".`);
  }
}

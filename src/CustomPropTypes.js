/**
 * Created by Justin on 5/19/2018.
 */
import PropTypes from 'prop-types';
import Building from './models/Building';
import Cost from './models/Cost';
import Player from './models/Player';
import Resource from './models/Resource';

export default {
  building: PropTypes.instanceOf(Building),
  cost: PropTypes.instanceOf(Cost),
  player: PropTypes.instanceOf(Player),
  resource: PropTypes.instanceOf(Resource),
};

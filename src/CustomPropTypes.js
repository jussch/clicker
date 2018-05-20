/**
 * Created by Justin on 5/19/2018.
 */
import PropTypes from 'prop-types';
import Building from './models/Building';
import Player from './models/Player';
import Resource from './models/Resource';

export default {
  building: PropTypes.instanceOf(Building),
  player: PropTypes.instanceOf(Player),
  resource: PropTypes.instanceOf(Resource),
};

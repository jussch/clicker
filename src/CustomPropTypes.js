/**
 * Created by Justin on 5/19/2018.
 */
import PropTypes from 'prop-types';
import BattleAction from './models/BattleAction';
import Building from './models/Building';
import Cost from './models/Cost';
import Enemy from './models/Enemy';
import Player from './models/Player';
import Resource from './models/Resource';
import Upgrade from './models/Upgrade';

export default {
  battleAction: PropTypes.instanceOf(BattleAction),
  building: PropTypes.instanceOf(Building),
  cost: PropTypes.instanceOf(Cost),
  enemy: PropTypes.instanceOf(Enemy),
  player: PropTypes.instanceOf(Player),
  resource: PropTypes.instanceOf(Resource),
  upgrade: PropTypes.instanceOf(Upgrade),
};

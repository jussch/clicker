/**
 * Created by Justin on May 15, 2018
*/
import { combineReducers } from 'redux-immutable';
import buildings from './buildings';
import player from './player';
import resources from './resources';
import upgrades from './upgrades';

export default combineReducers({
  buildings,
  player,
  resources,
  upgrades,
});

/**
 * Created by Justin on May 15, 2018
*/
import { combineReducers } from 'redux-immutable';
import battle from './battle';
import buildings from './buildings';
import player from './player';
import resources from './resources';
import upgrades from './upgrades';
import view from './view';

export default combineReducers({
  battle,
  buildings,
  player,
  resources,
  upgrades,
  view,
});

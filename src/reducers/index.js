/**
 * Created by Justin on May 15, 2018
*/
import { combineReducers } from 'redux-immutable';
import player from './player';
import resources from './resources';

export default combineReducers({
  player,
  resources,
});

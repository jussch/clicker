/**
 * Created by Justin on 5/19/2018.
 */
import { handleActions } from 'redux-actions';
import { Map } from 'immutable';
import Building from '../models/Building';

export const initialState = Map({
  farms: new Building(),
});

export default handleActions({

}, initialState);

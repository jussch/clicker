/**
 * Created by Justin on 5/19/2018.
 */
import { handleActions } from 'redux-actions';
import { Map } from 'immutable';
import Building from '../models/Building';

export const initialState = Map({
  farm: new Building({ name: 'farm' }),
});

export default handleActions({

}, initialState);

/**
 * Created by Justin on May 15, 2018
*/
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import processTransactions from '../middleware/processTransactions';
import recalculateResourceRate from '../middleware/recalculateResourceRate';

export default function configureStore(initialState) {
  const create = window.devToolsExtension ?
    window.devToolsExtension()(createStore) :
    createStore;

  const createStoreWithMiddleware = applyMiddleware(
    thunk,
    processTransactions,
    recalculateResourceRate,
  )(create);

  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(require('../reducers').default);
    });
  }

  return store;
}

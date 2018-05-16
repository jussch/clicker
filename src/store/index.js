/**
 * Created by Justin on May 15, 2018
*/
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  const create = window.devToolsExtension ?
    window.devToolsExtension()(createStore) :
    createStore;

  const createStoreWithMiddleware = applyMiddleware(
    thunk,
  )(create);

  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(require('../reducers').default);
    });
  }

  return store;
}

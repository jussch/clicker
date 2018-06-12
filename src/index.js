import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as LoadedModels from './models';
import { loadModels } from './models/extensions/allModels';
import App from './components/Layout/App';
import registerServiceWorker from './registerServiceWorker';

loadModels(LoadedModels);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

if (module.hot) {
  module.hot.accept('./components/Layout/App', () => {
    const NewApp = require('./components/Layout/App').default;
    ReactDOM.render(<NewApp />, document.getElementById('root'));
  });
}

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import createStore from '../../../store/index';
import { getMainStore, setMainStore } from '../../../store/MainStore';
import ResourcePanel from '../../Resources/ResourcePanel';
import WorkButton from '../../Player/WorkButton';
import Header from '../Header';

import styles from './App.scss';

const IS_DEVELOPMENT = true;

class App extends Component {
  constructor(props) {
    super(props);

    let store = getMainStore();
    console.log('store:', store);
    if (store == null) {
      store = createStore();
      setMainStore(store);
    }

    if (IS_DEVELOPMENT) {
      window.store = store;
    }

    this.state = {
      store,
    };
  }

  componentDidMount() {

  }

  render() {
    const {
      store
    } = this.state;

    return (
      <Provider store={store}>
        <div className={styles.app}>
          <Header />
          <p className={styles.appIntro}>
            <ResourcePanel />
          </p>
          <p className={styles.appIntro}>
            <WorkButton />
          </p>
        </div>
      </Provider>
    );
  }
}

export default App;

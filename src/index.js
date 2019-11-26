import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux';

import todoApp from './store/reducers';
import routers from './router';

import './index.scss';

let store = createStore(todoApp);
ReactDOM.render((
  <Provider store={store}>
    {routers}
  </Provider>
), document.getElementById('root'));


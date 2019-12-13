import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux';

import reducerRedux from './store/reducers';
import routers from './router';

import './index.scss';

let store = createStore(reducerRedux);


ReactDOM.render((
  <Provider store={store}>
    {routers}
  </Provider>
), document.getElementById('root'));


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducerRedux from './store/reducers';
import AppRouter from './router/AppRouter';
import './index.scss';

let store = createStore(reducerRedux);

ReactDOM.render(<Provider store={store}><AppRouter /></Provider>, document.getElementById('root'))

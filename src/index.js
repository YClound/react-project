import React from 'react';
import ReactDOM from 'react-dom';

// import Router from './router';
// import { Provider } from 'react-redux'
// import { createStore } from 'redux';

// import reducerRedux from './store/reducers';

// import './index.scss';

// let store = createStore(reducerRedux);

// ReactDOM.render((
//   <Provider store={store}>
//     <Router />
//   </Provider>
// ), document.getElementById('root'));

import AppRouter from './router/AppRouter';
ReactDOM.render(<AppRouter />, document.getElementById('root'))

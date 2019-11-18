import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom'

import todoApp from './store/reducers';

// import './index.scss';
import App from './pages/App/App.jsx';
// import Hello from './pages/Hello/Hello.jsx'
// import Timer from './pages/Timer/Timer.jsx'
// import TodoList from './pages/TodoList/TodoApp.jsx'
// import Game from './pages/Game/Game.jsx';
import RouterIndex from './pages/Router/RouterIndex.jsx'

import * as serviceWorker from './serviceWorker';

// ReactDOM.render((
//   <BrowserRouter>
//     <RouterIndex />
//   </BrowserRouter>
// ), document.getElementById('root'));

let store = createStore(todoApp);
ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

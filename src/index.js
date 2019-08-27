import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// import './index.scss';
import App from './pages/App/App.jsx';
import Hello from './pages/Hello/Hello.jsx'
import Timer from './pages/Timer/Timer.jsx'
// import TodoList from './pages/TodoList/TodoApp.jsx'
// import Game from './pages/Game/Game.jsx';

import * as serviceWorker from './serviceWorker';

ReactDOM.render((<Router>
  <Route exact path='/' component={App}></Route>
  <Route path="/hello" component={Hello} />
  <Route path="/timer" component={Timer} />
</Router>), document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

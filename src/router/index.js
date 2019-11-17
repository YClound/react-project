import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from '../pages/App/App.jsx';
import Hello from '../pages/Hello/Hello.jsx'
import Timer from '../pages/Timer/Timer.jsx'
import TodoList from '../pages/TodoList/TodoApp.jsx'
import Game from '../pages/Game/Game.jsx';

const routers = (
    <Router>
        <Route exact path='/' component={App}></Route>
        <Route path="/hello" component={Hello} />
        <Route path="/timer" component={Timer} />
        <Route path="/todoList" component={TodoList} />
        <Route path="/game" component={Game} />
    </Router>
)

export default routers;
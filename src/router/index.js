import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from '../pages/App/App.jsx';
import Hello from '../pages/Hello/Hello.jsx'
import Timer from '../pages/Timer/Timer.jsx'
import TodoList from '../pages/TodoList/TodoApp.jsx'
import Game from '../pages/Game/Game.jsx';
import Home from '../pages/Home'
import HookIndex from '../pages/Hooks';

const routers = (
	<Router>
		<Switch>
			<Route exact path='/' component={Home}></Route>
			<Route path='/app' component={App} />
			<Route path='/hook' component={HookIndex}/>
			<Route path="/hello" component={Hello} />
			<Route path="/timer" component={Timer} />
			<Route path="/todoList" component={TodoList} />
			<Route path="/game" component={Game} />
		</Switch>
	</Router>
)

export default routers;
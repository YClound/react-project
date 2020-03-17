import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import App from '../pages/App';
import Hello from '../pages/Hello'
import Timer from '../pages/Timer'
import TodoList from '../pages/TodoList'
import Game from '../pages/Game';
import HookIndex from '../pages/Hooks';
import Main from '../pages/main';
import RouterIndex from '../pages/Router';

import ContextTest from '../pages/Context';
import ContextConsumser from '../pages/Context/consumer';
import ContextVsRedux from '../pages/ContextVsRedux';
import ReduxTest from '../pages/ContextVsRedux/reduxTest';

import NotFound from '../pages/NotFound';

console.log(ReduxTest)
const routes = () => (
	<HashRouter>
		<Switch>
			<Route path='/' exact component={App} />
			<Route path='/hook/:id' component={HookIndex} />
			<Route path="/hello/:id?" component={Hello} />
			<Route path="/timer" component={Timer} />
			<Route path="/todoList" component={TodoList} />
			<Route path="/game" component={Game} />
			<Route path="/route" component={RouterIndex} />
			<Route path="/home" component={Main} />
			<Route path="/context" component={ContextTest} />
			<Route path="/contextConsumer" component={ContextConsumser} />
			<Route path="/propsComp" component={ContextVsRedux} />
			<Route path="/propsRedux" component={ReduxTest} />
			<Route component={NotFound}></Route>
		</Switch>
	</HashRouter>
)

export default routes;
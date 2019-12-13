import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import App from '../pages/App';
// import Hello from '../pages/Hello'
// import Timer from '../pages/Timer'
// import TodoList from '../pages/TodoList'
// import Game from '../pages/Game';
// import HookIndex from '../pages/Hooks';
import main from '../pages/main'
import NotFound from '../pages/NotFound'

const routers = (
	<Router>
		<Switch>
			<Route exact path='/' component={main}></Route>
			{/* <Route path='/app' component={App} />
			<Route path='/hook' component={HookIndex}/>
			<Route path="/hello" component={Hello} />
			<Route path="/timer" component={Timer} />
			<Route path="/todoList" component={TodoList} />
			<Route path="/game" component={Game} /> */}
			<Route component={NotFound}></Route>
		</Switch>
	</Router>
)

export default routers;
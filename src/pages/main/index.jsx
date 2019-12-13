import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from '../App/index';
import Hello from '../Hello/index'
import Timer from '../Timer/index'
import TodoList from '../TodoList/index'
import Game from '../Game/index';
import HookIndex from '../Hooks/index';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '222222'
    }
  }

  componentDidMount() {
    this.setState({ name: '3333333' })
  }

  render() {
    const { name } = this.state || {}

    return (
      <div>
        <div className='header'>header</div>
        <div className='main-container'>
          <div className='sidebar'>sidebar</div>
          <div className='main'>
            <Router>
              <Route path='/' exact component={App} />
              <Route path='/hook' component={HookIndex} />
              <Route path="/hello" component={Hello} />
              <Route path="/timer" component={Timer} />
              <Route path="/todoList" component={TodoList} />
              <Route path="/game" component={Game} />
            </Router>
          </div>
        </div>
        <div className='footer'>gooter</div>
      </div>
    )
  }
}

export default Home;

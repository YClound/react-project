import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer'
import AddTodo from '../../containers/AddTodo'
import VisibleTodoList from '../../containers/VisibleTodoList'
import Count from '../../containers/Count'
import './App.css';

class App extends React.Component {
  componentWillMount() {
    console.log('componentWillMount')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentWillUpdate() {
    console.log('componentWillUpdate')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps')
  }

  render() {
    return (
      <div className="App">
        Hello {this.props.name}

        <Link to="/hello">Hello</Link>
        <Link to="/timer">Timer</Link>
        <Link to="/game">Game</Link>
        <Link to="/todoList">TodoList</Link>

        <AddTodo />
        <VisibleTodoList />
        <Count />
        <Footer />

        <div className="router-children">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App;

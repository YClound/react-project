import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer'
import AddTodo from '../../containers/AddTodo'
import VisibleTodoList from '../../containers/VisibleTodoList'
import Count from '../../containers/Count'
import './App.scss';

function Example(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;

    return () => {
      console.log('22222222222')
    }
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      number: 0
    }
  }
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

  btnClick() {
    let number = this.state.number
    this.setState({ number: ++number })
  }

  render() {
    return (
      <div className="App">
        <h2 className={'component-title'}>Route</h2>
        <div className={'component-content'}>
          <Link className={'link'} to="/hello">Hello</Link>
          <Link className={'link'} to="/timer">Timer</Link>
          <Link className={'link'} to="/game">Game</Link>
          <Link className={'link'} to="/todoList">TodoList</Link>
        </div>

        <h2 className={'component-title'}>Todo List</h2>
        <div className={'component-content'}>
          <AddTodo />
          <VisibleTodoList />
          <Footer />
        </div>

        <h2 className={'component-title'}>Count</h2>
        <div className={'component-content'}>
          <Count />
        </div>

        <h2 className={'component-title'}>React Hook</h2>
        <div className={'component-content'}>
          <Example number={this.state.number} />
        </div>

        <button onClick={this.btnClick.bind(this)}>点击</button>

        <div className="router-children">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App;

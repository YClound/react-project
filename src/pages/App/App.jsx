import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        Hello {this.props.name}

        <Link to="/hello">Hello</Link>
        <Link to="/timer">Timer</Link>
      </div>
    )
  }
}

export default withRouter(App);

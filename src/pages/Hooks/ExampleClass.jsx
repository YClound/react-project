import React, { Component } from 'react';
import { ChatAPI } from './utils/chatApi';

export default class ExampleClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isOnline: null
    }

    this.handleStatusChange = this.handleStatusChange.bind(this);
  }

  componentDidMount() {
    // console.log(+new Date(), this.state.count, 'Class didMount')
    document.title = `class ${this.state.count} times`;

    ChatAPI.subscribeToFriendStatus(
      this.props.friend.id,
      this.handleStatusChange,
      'Class'
    );
  }

  componentDidUpdate() {
    // console.log(+new Date(), this.state.count, 'Class didUpdate')
    document.title = `class ${this.state.count} times`;
  }

  componentWillUnmount() {
    ChatAPI.unsubscribeFromFriendStatus(
      this.props.friend.id,
      this.handleStatusChange,
      'Class'
    );
  }

  handleStatusChange(status) {
    this.setState({
      isOnline: status.isOnline
    });
  }

  render() {
    return <div className={'class-wrapper'}>
      <h1>Class示例</h1>
      <p>You clicked {this.state.count} times</p>
      <button onClick={() => this.setState({ count: this.state.count + 1 })}>Click me</button>

      <h1>生命周期</h1>
      <div>{this.state.isOnline === null ? 'loading' : this.state.isOnline ? 'Online' : 'Offline'}</div>
    </div>
  }
}
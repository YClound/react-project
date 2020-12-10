import React, { Component } from 'react';
import { ChatAPI } from './utils/chatApi';
import FancyButton from './ExampleRef';

export default class ExampleClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isOnline: null
    }

    this.buttonRef = React.createRef();
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

    /**
     * refs
     * 1. React.forwardRef
     * 2. Class
     * @version 2020.05.28
     * @see https://react.docschina.org/docs/refs-and-the-dom.html
    */
    // this.buttonRef.current.className = '11111'
    // console.log(this.buttonRef.current.className)
    this.buttonRef.current.handleRefMethod();
    this.buttonRef.current.state.btnName = '按钮2';
    console.log(this.buttonRef.current)
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

      <h1>Refs转发</h1>
      <FancyButton ref={this.buttonRef}>Refs转发</FancyButton>
    </div>
  }
}
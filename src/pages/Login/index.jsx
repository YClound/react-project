import React, { Component } from 'react';
import { Button, Form } from 'antd';
import { fakeAuth } from '../../utils/fakeAuth';
import styles from './index.module.scss';

class Login extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.history.push('/home')
    }, 2000);
  }

  handleLogin = () => {
    fakeAuth.setToken('11111111')
    this.props.history.push('/home');

    console.log(this.props.history)
  }

  render() {
    return <Form className={styles.loginWrapper}>
      <Button onClick={this.handleLogin}>登录</Button>
    </Form>
  }
}

export default Login;
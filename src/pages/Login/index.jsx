import React, { Component } from 'react';
import { Button, Form } from 'antd';
import { fakeAuth } from '../../utils/fakeAuth';
import styles from './index.module.scss';

class Login extends Component {
  componentDidMount() {

  }

  handleLogin = () => {
    fakeAuth.setToken('11111111')
    this.props.history.push('/home');
  }

  render() {
    return <Form className={styles.loginWrapper}>
      <Button onClick={this.handleLogin}>登录</Button>
    </Form>
  }
}

export default Login;
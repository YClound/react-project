import routers from '../../router';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd';

import './index.scss';

import Login from '../Login';

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const { Header, Sider, Content, Footer } = Layout;

class Main extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/'>
            <Layout>
              {/* <div className='sidebar-wrapper'>sidebar</div>
              <div className='main-wrapper'>
                <div className='header-wrapper'>header</div>
                <div className='main-container'>
                  {routers}
                </div>
                <div className='footer-wrapper'>footer</div>
              </div> */}
              <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                  <Menu.Item key="1">
                    <Icon type="user" />
                    <span>nav 1</span>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Icon type="video-camera" />
                    <span>nav 2</span>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <Icon type="upload" />
                    <span>nav 3</span>
                  </Menu.Item>
                </Menu>
              </Sider>
              <Layout>
                <Header style={{ background: '#fff', padding: 0 }}>
                  <Icon
                    className="trigger"
                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.toggle}
                  />
                </Header>
                <Content
                  style={{
                    margin: '24px 16px',
                    padding: 24,
                    background: '#fff',
                    minHeight: 280,
                  }}
                >
                  Content
                </Content>
              </Layout>
            </Layout>
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default Main;

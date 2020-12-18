import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './index.scss'
/**
 * 使用组合方式children解决props属性下浸
 * @author guyanan
 * @version 20200205
 */

const UserAvatar = ({ user, size }) => (
  <img
    className={`user-avatar ${size || ""}`}
    alt="user avatar"
    src={user.avatar}
  />
);

const UserStats = ({ user }) => (
  <div className="user-stats">
    <div className="user-info">
      <UserAvatar user={user} />
      {user.name}
    </div>
    <div className="stats">
      <div>{user.followers} Followers</div>
      <div>Following {user.following}</div>
    </div>
  </div>
);

const Nav = ({ children }) => (
  <div className="nav">
    {children}
  </div>
);

const Body = ({ sidebar, content }) => (
  <div className="body">
    <Sidebar>{sidebar}</Sidebar>
    {content}
  </div>
);

const Content = () => <div className="content">
  <h2>main content here</h2>
  <Link to="/base/propsRedux">Redux</Link>
  <Link to="/base/context">Context</Link>
</div>;

const Sidebar = ({ children }) => (
  <div className="sidebar">
    {children}
  </div>
);

class ContextVsRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        avatar:
          "https://www.gravatar.com/avatar/5c3dd2d257ff0e14dbd2583485dbd44b",
        name: "Dave",
        followers: 1234,
        following: 123
      }
    };
  }

  render() {
    const { user } = this.state;

    return <div className="react-base-wrapper">
      <Nav>
        <UserAvatar user={user} size="small" />
      </Nav>
      <Body
        sidebar={<UserStats user={user} />}
        content={<Content user={user} />}
      />
    </div>
  }
}

export default ContextVsRedux;
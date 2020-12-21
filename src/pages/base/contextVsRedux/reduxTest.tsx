import React, { Component, FC } from 'react';
import { connect, ConnectedComponent } from 'react-redux'

import './index.scss';

// 函数 mapStateToProps 从 state 对象中提取 user 值
// 并将它作为 `user` 属性传递
const mapStateToProps = state => ({
  user: state.user
});

// connect() UserAvatar 以便它可以直接接收 `user` 属性，
// 而无需从上层组件中获取

// 也可以把它分成下面 2 个变量：
//   const UserAvatarAtom = ({ user, size }) => ( ... )
//   const UserAvatar = connect(mapStateToProps)(UserAvatarAtom);
const UserAvatar: ConnectedComponent<any, any> = connect(mapStateToProps)(({ user, size }) => (
  <img
    className={`user-avatar ${size || ""}`}
    alt="user avatar"
    src={user.avatar}
  />
));

// connect() UserStats 以便它可以直接接收 `user` 属性，
// 而无需从上层组件中获取
// （同样使用 mapStateToProps 函数）
const UserStats: ConnectedComponent<any, any> = connect(mapStateToProps)(({ user }) => (
  <div className="user-stats">
    <div>
      <UserAvatar />
      {user.name}
    </div>
    <div className="stats">
      <div>{user.followers} Followers</div>
      <div>Following {user.following}</div>
    </div>
  </div>
));

// Nav 不再需要知道 `user` 属性
const Nav = () => (
  <div className="nav">
    <UserAvatar size="small" />
  </div>
);

const Content = () => (
  <div className="content">main content here</div>
);

// Sidebar 也不再需要知道 `user` 属性
const Sidebar = () => (
  <div className="sidebar">
    <UserStats />
  </div>
);

// body 同样不需要知道 `user` 属性
const Body = () => (
  <div className="body">
    <Sidebar />
    <Content />
  </div>
);

// App 不再需要保存 state，
// 所以可以把它写成一个无状态组件
class ReduxTest extends Component<any, any> {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: "SET_USER",
      user: {
        avatar: "https://www.gravatar.com/avatar/5c3dd2d257ff0e14dbd2583485dbd44b",
        name: "Dave",
        followers: 1234,
        following: 123
      }
    })
  }
  
  render() {
    return (
      <div className="react-base-wrapper">
        <Nav />
        <Body />
      </div>
    )
  }
}

export default connect()(ReduxTest);
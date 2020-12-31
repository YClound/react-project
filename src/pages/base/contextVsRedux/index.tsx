import React, { Component, FC } from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
import logo from "@/images/logo.svg";

import "./index.scss";
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
      <UserAvatar user={user} size={"small"} />
      {user.name}
    </div>
    <div className="stats">
      <div>{user.followers} Followers</div>
      <div>Following {user.following}</div>
    </div>
  </div>
);

const Nav = ({ children }) => <div className="nav">{children}</div>;

const Body = ({ sidebar, content }) => (
  <div className="body">
    <Sidebar>{sidebar}</Sidebar>
    {content}
  </div>
);

const Content: FC<any> = () => (
  <div className="content">
    <h2>main content here</h2>
    <Link to="/base/propsRedux">Redux</Link>
    <Link to="/base/context">Context</Link>
  </div>
);

const Sidebar = ({ children }) => <div className="sidebar">{children}</div>;

class ContextVsRedux extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        avatar: logo,
        name: "Yanan",
        followers: 1234,
        following: 123,
      },
    };
  }

  render() {
    const { user } = this.state;

    return (
      <Card className="react-base-wrapper">
        <Nav>
          <UserAvatar user={user} size="small" />
        </Nav>
        <Body
          sidebar={<UserStats user={user} />}
          content={<Content user={user} />}
        />
      </Card>
    );
  }
}

export default ContextVsRedux;

import React from "react";
import { message as antdMsg } from "antd";

class ProfilePage extends React.Component<{ user: string }> {
  /** 使用闭包 点击之后切换选项 -> 显示切换之前的名称 */
  // showMessage = (user) => {
  //   antdMsg.success('Followed ' + user);
  // };

  // handleClick = () => {
  //   const { user } = this.props;
  //   setTimeout(() => {
  //     this.showMessage(user)
  //   }, 3000);
  // };

  showMessage = () => {
    antdMsg.success("Followed " + this.props.user);
  };

  handleClick = () => {
    setTimeout(this.showMessage, 3000);
  };

  render() {
    return <button onClick={this.handleClick}>Follow</button>;
  }
}

export default ProfilePage;

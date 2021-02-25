import React, { Component } from "react";
import { Select } from "antd";
import ProfilePageFunction from "./components/ProfilePageFunction";
import ProfilePageClass from "./components/ProfilePageClass";
/**
 * @description 函数式组件与类组件有何不同？
 * 点击follow按钮之后切换选择
 * function -> 显示选择之前的名称
 * class -> 显示选择之后名称
 * @link https://overreacted.io/zh-hans/how-are-function-components-different-from-classes/
 */
class ClassVsFunc extends Component {
  state = {
    user: "Dan",
  };

  handleSelectChange = (value) => {
    this.setState({ user: value });
  };

  render() {
    return (
      <>
        <label>
          <b>Choose profile to view: </b>
          <Select
            value={this.state.user}
            onChange={(value) => this.handleSelectChange(value)}
            style={{ width: "100px" }}
          >
            <Select.Option value="Dan">Dan</Select.Option>
            <Select.Option value="Sophie">Sophie</Select.Option>
            <Select.Option value="Sunil">Sunil</Select.Option>
          </Select>
        </label>
        <h1 style={{ padding: "10px 0" }}>
          Welcome to {this.state.user}’s profile!
        </h1>
        <p>
          <ProfilePageFunction user={this.state.user} />
        </p>
        <p>
          <ProfilePageClass user={this.state.user} />
          <b> (class 组件)</b>
        </p>
        <p>Can you spot the difference in the behavior?</p>
      </>
    );
  }
}

export default ClassVsFunc;

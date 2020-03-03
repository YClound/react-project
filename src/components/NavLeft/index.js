import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import MenuConfig from '../../config/menuConfig';
import './index.scss';
const SubMenu = Menu.SubMenu;

export default class NavLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuTreeNode: ''
    }
  }

  componentDidMount() {
    const menuTreeNode = this.renderMenu(MenuConfig);
    this.setState({ menuTreeNode: menuTreeNode || '' })
  }

  renderMenu = (MenuConfig) => {
    return MenuConfig.map(item => {
      if (item.children) {
        return <SubMenu title={item.title} key={item.key}>
          {this.renderMenu(item.children)}
        </SubMenu>
      }
      return <Menu.Item title={item.title} key={item.key}>{item.title}</Menu.Item>
    })
  }

  render() {
    return (
      <div>
        <div className="logo">
          <img src="" alt="logo" />
          <h1>React后台管理</h1>
        </div>
        <Menu theme="dark" mode="inline">
          {this.state.menuTreeNode}
        </Menu>
      </div>
    )
  }
}

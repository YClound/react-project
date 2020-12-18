import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import { HomeFilled, SmileFilled, DatabaseFilled, TagFilled, ApiFilled, HourglassFilled, PushpinFilled } from '@ant-design/icons';

import styles from './index.module.scss';
import logo from '@/images/logo.svg';

const SubMenu = Menu.SubMenu;
const IconMap = {
  home: <HomeFilled height={'2em'} />,
  smile: <SmileFilled />,
  base: <DatabaseFilled />,
  tag: <TagFilled />,
  hook: <HourglassFilled />,
  api: <ApiFilled />,
  advanced: <PushpinFilled />,
}

export default class SiderMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuTreeNode: ''
    }
  }

  componentDidMount() {
    const menuTreeNode = this.renderMenu(this.props.routes);
    this.setState({ menuTreeNode: menuTreeNode || '' })
  }

  renderMenu = (MenuConfig) => {
    return MenuConfig.map(item => {
      if (item.children) {
        return <SubMenu
          title={
            <span>
              {item.icon && IconMap[item.icon]}
              <span>{item.name}</span>
            </span>
          } key={item.path}>
          {this.renderMenu(item.children)}
        </SubMenu>
      }
      return item.hideMenu ? '' : <Menu.Item
        title={item.name}
        key={item.path}>
        <NavLink to={item.path}>
          {item.icon && IconMap[item.icon]}
          <span>{item.name}</span>
        </NavLink>
      </Menu.Item>
    })
  }

  render() {
    return (
      <div className={styles.siderMenuWrapper}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
          <h1>React后台管理</h1>
        </div>
        <Menu theme="dark" mode="inline">
          {this.state.menuTreeNode}
        </Menu>
      </div>
    )
  }
}

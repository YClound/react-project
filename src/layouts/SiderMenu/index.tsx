import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectKeys } from '@/store/actions';
import { HomeFilled, SmileFilled, DatabaseFilled, TagFilled, ApiFilled, HourglassFilled, PushpinFilled } from '@ant-design/icons';

import styles from './index.module.scss';
import logo from '@/images/logo.svg';

const SubMenu = Menu.SubMenu;
const IconMap = {
  home: <HomeFilled />,
  smile: <SmileFilled />,
  base: <DatabaseFilled />,
  tag: <TagFilled />,
  hook: <HourglassFilled />,
  api: <ApiFilled />,
  advanced: <PushpinFilled />,
}

const SiderMenu = (props) => {
  const { routes = [], collapsed } = props;
  const [menuTreeNode, setMenuTreeNode] = useState('');
  const [current, setCurrent] = useState('/');
  const dispatch = useDispatch();

  useEffect(() => {
    const menuTreeNode = renderMenu(routes);
    setMenuTreeNode(menuTreeNode || '');
    dispatch({ type: getSelectKeys })
  }, [routes])

  const renderMenu = (MenuConfig) => {
    return MenuConfig.map(item => {

      if (item.children) {
        return <SubMenu
          title={
            <span>
              {item.icon && IconMap[item.icon]}
              <span>{item.name}</span>
            </span>
          }
          key={item.path}
        >
          {renderMenu(item.children)}
        </SubMenu>
      }

      return !item.hideMenu ? <Menu.Item
        title={item.name}
        key={item.path}
      >
        <NavLink to={item.path}>
          {item.icon && IconMap[item.icon]}
          <span>{item.name}</span>
        </NavLink>
      </Menu.Item> : ''
    })
  }

  const handleClick = (e) => {
    console.log(e, '222222222 handleMenuClick');
    setCurrent(e.key);

  }

  return (
    <div className={styles.siderMenuWrapper}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
        {!collapsed && <h1>React后台管理</h1>}
      </div>
      <Menu
        theme="dark"
        mode="inline"
        className={styles['menu-list']}
        onClick={handleClick}
        selectedKeys={[current]}
      >
        {menuTreeNode}
      </Menu>
    </div>
  )
}

export default SiderMenu;

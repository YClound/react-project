import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RooteStateModel } from "@/store/reducers";
import styles from "./index.module.scss";
import logo from "@/images/logo.svg";

const SubMenu = Menu.SubMenu;

const SiderMenu = (props) => {
  const { routes = [], collapsed } = props;
  const [menuTreeNode, setMenuTreeNode] = useState("");
  const { openKey, selectKey } = useSelector(
    (state: RooteStateModel) => state.global
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const menuTreeNode = renderMenu(routes);
    setMenuTreeNode(menuTreeNode || "");
  }, []);

  const renderMenu = (MenuConfig) => {
    return MenuConfig.map((item) => {
      if (item.children) {
        return (
          <SubMenu
            title={
              <span>
                {item.icon}
                <span>{item.name}</span>
              </span>
            }
            key={item.path}
          >
            {renderMenu(item.children)}
          </SubMenu>
        );
      }

      return !item.hideMenu ? (
        <Menu.Item title={item.name} key={item.path}>
          <NavLink to={item.path}>
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        </Menu.Item>
      ) : (
        ""
      );
    });
  };

  return (
    <div className={styles.siderMenuWrapper}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
        {!collapsed && <h1>React后台管理</h1>}
      </div>
      <Menu
        theme="dark"
        mode="inline"
        className={styles["menu-list"]}
        selectedKeys={selectKey}
        defaultOpenKeys={openKey}
      >
        {menuTreeNode}
      </Menu>
    </div>
  );
};

export default SiderMenu;

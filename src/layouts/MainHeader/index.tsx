import React, { useState } from "react";
import { Row, Col, Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";

export default function MainHeader(props) {
  const [userName] = useState("yanan");

  const menu = (
    <Menu>
      <Menu.Item>
        <Link to="/user/login">个人信息</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <Link to="/user/login">退出登录</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className={styles.header}>
      <Row className={styles.headerTop}>
        <Col span={24}>
          <Dropdown overlay={menu}>
            <div className={styles.welcome}>
              欢迎 {userName} <DownOutlined />
            </div>
          </Dropdown>
        </Col>
      </Row>
    </div>
  );
}

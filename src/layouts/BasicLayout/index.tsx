import React, { useState } from 'react';
import { Layout } from 'antd';
import SiderMenu from '../SiderMenu';
import MainHeader from '../MainHeader';
import styles from './index.module.scss';
const { Sider, Header, Content } = Layout

const BasicLayout = ({ route, children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = () => {
    setCollapsed(cur => !cur)
  }

  return (
    <Layout className={styles.mainLayout} hasSider>
      {/* 左侧菜单导航 */}
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <SiderMenu routes={route.children} collapsed={collapsed} />
      </Sider>
      {/* 右侧菜单对应显示的内容 */}
      <Layout className={styles.mainLayoutRight}>
        <div className={styles.mainLayoutContainer}>
          <Header style={{ padding: 0, height: 'auto' }}>
            <MainHeader />
          </Header>
          <Content className={styles.mainLayoutContent}>
            {children}
          </Content>
        </div>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;

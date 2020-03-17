import React from 'react';
import { Layout } from 'antd';
import SiderMenu from '../SiderMenu';
import MainHeader from '../MainHeader';
import MainFooter from "../MainFooter";
import styles from './index.module.scss';
const { Sider, Header, Content, Footer } = Layout

const BasicLayout = ({ route, children }) => {
  return (
    <Layout className={styles.mainLayout} hasSider>
      {/* 左侧菜单导航 */}
      <Sider><SiderMenu routes={route.children} /></Sider>
      {/* 右侧菜单对应显示的内容 */}
      <Layout className={styles.mainLayoutRight}>
        <div className={styles.mainLayoutContainer}>
          <Header style={{ background: '#fff', padding: 0, height: 'auto' }}>
            <MainHeader />
          </Header>
          <Content className={styles.mainLayoutContent}>
            {children}
          </Content>
          <Footer style={{padding: '15px'}}>
            <MainFooter />
          </Footer>
        </div>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;

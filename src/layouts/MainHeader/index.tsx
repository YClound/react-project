import React, { Component } from 'react';
import { Row, Col } from 'antd';
import styles from './index.module.scss';

export default class MainHeader extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'yanan',
      sysTime: '2020-03-03 17:00:00',
      dayPictureUrl: ''
    }
  }
  render() {
    return <div className={styles.header} >
      <Row className={styles.headerTop}>
        <Col span={24} >
          <span >欢迎</span>
          <span className="welcome">{this.state.userName}</span>
          <a href="#/login">退出</a>
        </Col>
      </Row>
    </div>
  }
}
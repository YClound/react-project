import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import NavLeft from './components/NavLeft/index';

import './index.scss';

export default class Admin extends Component {
  render() {
    return (
      <Row className="container">
        <Col span={5} className="nav-left" >
          <NavLeft />
        </Col>
        <Col span={19} className="main">
          <Header />
          <Row className="content">
            {this.props.children}
          </Row>
          <Footer />
        </Col>
      </Row>
    )
  }
}
import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './index.scss';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'yanan',
      sysTime: '2020-03-03 17:00:00',
      dayPictureUrl: ''
    }
  }
  render() {
    return <div className="header" >
      <Row className="header-top">
        <Col span={24} >
          <span >欢迎</span>
          <span className="welcome">{this.state.userName}</span>
          <a href="">退出</a>
        </Col>
      </Row>

      <Row className="breadcrumb">
        <Col span={4} className="breadcrumb-title">
          首页
        </Col>
        <Col span={20} className="weather">
          <span className="date">{this.state.sysTime}</span>
          <span className="weather-img">
            <img src={this.state.dayPictureUrl} alt="" />
          </span>
          <span className="weather-detail">
            {this.state.weather}
          </span>
        </Col>
      </Row>
    </div>
  }
}
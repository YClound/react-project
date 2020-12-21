import React, { useState, useEffect } from 'react';
import { Button, Row, Col, message, Card } from 'antd';
import EffectChild from "./components/EffectChild";
import { ChatAPI } from './utils/chatApi';

const UseEffectExamp = (props) => {
  const [friend, setFriend] = useState({ id: '1' })
  const [effectDep, setEffectDep] = useState({ name: '小明' });
  const handleEffectDepChange = () => {
    setEffectDep({ name: '小明1' });
  }

  useEffect(() => {
    message.warn('useEffect触发');
  }, [effectDep])

  /**
   * useEffect (return函数依赖更新、页面重新渲染、页面卸载时触发)
   * effect 的清除阶段在每次重新渲染时都会执行，而不是只在卸载组件的时候执行一次
   * 无依赖字段时 页面重新渲染时 触发清除副作用和更新
   * 有依赖字段时 依赖字段更新的时候 触发清除副作用和更新
   */
  const [isOnline, setIsOnline] = useState(null);
  const handleStatusChange = (status) => { setIsOnline(status.isOnline); }
  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(friend.id, handleStatusChange, "Hook");
    // 清除副作用:
    return function cleanup() {
      ChatAPI.unsubscribeFromFriendStatus(friend.id, handleStatusChange, 'Hook');
    };
  }, [friend])

  useEffect(() => {
    setTimeout(() => {
      setFriend({ id: '2' })
    }, 5000)
  }, [])

  return <Card>
    <Row>
      <Col>
        <Button onClick={handleEffectDepChange} type={'primary'}>改变useEffect依赖的对象</Button>
      </Col>
    </Row>
    <EffectChild effectDep={effectDep} />

    <div>{isOnline === null ? 'loading' : isOnline ? 'Online' : 'Offline'}</div>
  </Card>
}

export default UseEffectExamp;
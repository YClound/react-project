import React, { useState, useEffect } from 'react';
import { ChatAPI } from './utils/chatApi';
import { useFriendStatus } from './utils/useFriendStatus'

export default function ExampleHook(props) {
  const { friend } = props;
  const [count, setCount] = useState(0);

  const setHookState = () => {
    setCount(() => count + 1);
  }

  useEffect(() => {
    // 更新文档的标题
    // console.log(+new Date(), count, 'Hook useEffect')
    document.title = `Hook ${count} times`;
  }, [count]);

  /**
   * useEffect (return函数依赖更新、页面重新渲染、页面卸载时触发)
   * effect 的清除阶段在每次重新渲染时都会执行，而不是只在卸载组件的时候执行一次
   * 无依赖字段时 页面重新渲染时 触发清除副作用和更新
   * 有依赖字段时 依赖字段更新的时候 触发清除副作用和更新
   */
  // const [isOnline, setIsOnline] = useState(null);
  // const handleStatusChange = (status) => { setIsOnline(status.isOnline); }
  // useEffect(() => {
  //   ChatAPI.subscribeToFriendStatus(friend.id, handleStatusChange, "Hook");
  //   // 清除副作用:
  //   return function cleanup() {
  //     ChatAPI.unsubscribeFromFriendStatus(friend.id, handleStatusChange, 'Hook');
  //   };
  // }, [friend])

  const isOnline = useFriendStatus(friend.id);

  return (
    <div>
      <h1>Hook示例</h1>
      <p>You clicked {count} times</p>
      <button onClick={setHookState}>Click me</button>

      <h1>useEffect</h1>
      <div>{isOnline === null ? 'loading' : isOnline ? 'Online' : 'Offline'}</div>
    </div>
  );
}
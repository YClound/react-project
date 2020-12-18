import { useState, useEffect } from 'react'
import { ChatAPI } from './chatApi';

export function useFriendStatus(friendId) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline)
  }

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(friendId, handleStatusChange, "Hook 自定义");
    // 清除副作用:
    return function cleanup() {
      ChatAPI.unsubscribeFromFriendStatus(friendId, handleStatusChange, 'Hook 自定义');
    };
  }, [friendId])

  return isOnline;
}
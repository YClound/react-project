export const ChatAPI = {
  subscribeToFriendStatus(id, callback, type) {
    console.log('subscribeToFriendStatus:', id, type)
    callback && callback({ isOnline: true })
  },
  unsubscribeFromFriendStatus(id, callback, type) {
    console.log('unsubscribeFromFriendStatus:', id, type)
    callback && callback({ isOnline: false })
  }
}
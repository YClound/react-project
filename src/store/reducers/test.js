const count = (state = 0, action) => {
  const { type = '' } = action;
  console.log(state, action, 'test reducers state')
  let count = state;
  switch (type) {
    case 'ADD_COUNT':
      return ++count
    case 'JIAN_COUNT':
      return --count
    default:
      return state
  }
}

export default count
let nextTodoId = 0;

export const addTodo = text => {
  console.log(text, 'addTodo action')
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const addCount = (count) => {
  return {
    type: 'ADD_COUNT',
    count
  }
}

export const jianCount = (count) => {
  return {
    type: 'JIAN_COUNT',
    count
  }
}

export const setUser = (user) => {
  return {
    type: 'SET_USER',
    user
  }
}
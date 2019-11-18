import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import count from './test'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  count
})

export default todoApp
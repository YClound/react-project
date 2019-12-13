import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import count from './test'

const reducerRedux = combineReducers({
  todos,
  visibilityFilter,
  count
})

export default reducerRedux
import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import count from './test'
import user from './user';

const reducerRedux = combineReducers({
  todos,
  visibilityFilter,
  count,
  user
})

export default reducerRedux
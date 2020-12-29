import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import count from './test';
import user from './user';
import global from './global';

const reducerRedux = combineReducers({
  todos,
  visibilityFilter,
  count,
  user,
  global,
})

export default reducerRedux;
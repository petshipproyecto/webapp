import { combineReducers } from 'redux'
import user from './user';
import reducer from './reducer'

const reducers = combineReducers({
  user,
  reducer
});

export default reducers
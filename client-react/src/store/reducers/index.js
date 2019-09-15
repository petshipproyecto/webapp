import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import authReducer from './user';
import reducer from './reducer'
import todos from './todos'

const reducers = combineReducers({
  todos,
  auth: authReducer,
  reducer,
  firebase: firebaseReducer
});

export default reducers




// the key name will be the data property on the state object
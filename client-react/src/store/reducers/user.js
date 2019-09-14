import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
const initState = {
    authError: null,
    user: null
  }
  
  const authReducer = (state = initState, action) => {
    switch(action.type){
      case 'LOGIN_ERROR':
        console.log('login error');
        history.push('/choosePet');
        return {
          ...state,
          authError: true
        }
  
      case 'LOGIN_SUCCESS':
        console.log('login success');
        //console.log(action)
        /*
        let newState = Object.assign({}, state, {
            user: 'action.user',
            authError:null,
            a:"f"
        });
        */
       return {
        ...state,
        user: action.user,
        a:"f"
      }

        //console.log("new state " + JSON.stringify(newState))
       // return newState
  
      case 'SIGNOUT_SUCCESS':
        console.log('signout success');
       
        return state;
  
      case 'SIGNUP_SUCCESS':
        console.log('signup success')
        return {
          ...state,
          authError: null,
          firstTime: true
        }
  
      case 'SIGNUP_ERROR':
        console.log('signup error')
        return {
          ...state,
          authError: action.err.message
        }
  
      default:
        return state
    }
  };
  
  export default authReducer;
import React, { Component } from 'react';


import Grid from '@material-ui/core/Grid';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import Search from './components/basic/basicLayoutComponents/search'
import Notifications from './components/basic/basicLayoutComponents/notifications'
import Swipe from './components/basic/basicLayoutComponents/swipe'
import Profile from './components/basic/basicLayoutComponents/profile'
import PrivateRoute from './components/auth/PrivateRoute'
import Login from './components/auth/login'
import BasicLayout from './components/basic/BasicLayout'



class App extends Component {
  
  

  render() {
    return (
    <Router>
      <Grid container >
        <Grid  xs={12}>
                <div className="App">
                <Route path='/basicLayout' component={BasicLayout}></Route>
                {/* PrivateRoute 
                <Route path="/login" component={Login}/> */}
                
                </div>
        </Grid>
        
      </Grid>
        

    </Router>
    );
  }
}

export default App;

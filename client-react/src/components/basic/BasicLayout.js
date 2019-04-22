import React from 'react'
import Notifications from './basicLayoutComponents/notifications'
import Profile from './basicLayoutComponents/profile'
import Swipe from './basicLayoutComponents/swipe'
import Search from './basicLayoutComponents/search'
import SimpleBottomNavigation from './BottomNavigation'
import Grid from '@material-ui/core/Grid';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from 'react-router-dom'

function BasicLayout(){

    return (
        <Router>
            <Grid container >
                <Route path="/basicLayout/search" component={Search}></Route>
                <Route path="/basicLayout/swipe" component={Swipe}></Route>
                <Route path="/basicLayout/notifications" component={Notifications}></Route>
                <Route path="/basicLayout/profile" component={Profile}></Route>
            
            </Grid>
            <SimpleBottomNavigation />


        </Router>


        
    )

} 

export default BasicLayout
import React from 'react'
import basicInfo from './signUpBasicInfo'
import detailsInfo from './signUpDetailsInfo'
import Grid from '@material-ui/core/Grid';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from 'react-router-dom'

function SignUpForm(){

    return (
        <Router>
            <Grid container >
                <Route path="/signUp/OwnerInfoBasic" component={basicInfo}></Route>
                <Route path="/signUp/OwnerInfoDetails" component={detailsInfo}></Route>                
            </Grid>          


        </Router>


        
    )

} 

export default SignUpForm
import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ component: Component, user,isAdmin, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      
      user.isEmpty === true 
      ? <Component {...props} /> 
      : isAdmin ? <Redirect to={{
        pathname:  '/Dashboard'
      }}/> : <Redirect to={{
        pathname:  '/choosePet'
      }}/>
    )}   
  />
);

export default PublicRoute;

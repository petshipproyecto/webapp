import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ component: Component, user, ...rest }) => (
  
  <Route
    {...rest}
    render={(props) => (
      
      user.isEmpty === true 
      ? <Component {...props} /> 
      : <Redirect to={{
        pathname:  '/choosePet'
      }}/>
    )}
  />
  
);

export default PublicRoute;
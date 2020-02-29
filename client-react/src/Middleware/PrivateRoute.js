import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({isAdmin, path, component: Component, user, ...rest }) => (
  
  <Route
    {...rest}
    render={props =>
      user.isEmpty  !== true ? (
        (path === '/ChoosePet' && isAdmin) ? <Redirect to={{
          pathname:  '/Dashboard'
        }}/> :
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/welcome"
          }}
        />
      ) 
    }
  />
);

export default PrivateRoute;

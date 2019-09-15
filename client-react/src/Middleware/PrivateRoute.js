import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, user, ...rest }) => (
  
  <Route
    {...rest}
    render={props =>
      user.isEmpty !== true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/signin"
          }}
        />
      )
    }
  />
);

export default PrivateRoute;

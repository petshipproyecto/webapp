import React, { Component, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import PrivateRoute from '../Middleware/PrivateRoute'
import PublicRoute from '../Middleware/PublicRoute'
import { connect } from 'react-redux';
import '../../node_modules/font-awesome/scss/font-awesome.scss';

import Loader from './layout/Loader'
import Aux from "../hoc/_Aux";
import ScrollToTop from './layout/ScrollToTop';
import routes from "../route";

const AdminLayout = Loadable({
    loader: () => import('./layout/AdminLayout'),
    loading: Loader
});

class App extends Component {
    render() {
        console.log("app props" + JSON.stringify(this.props))
        const menu = routes.map((route, index) => {
            
          return (route.component) ? (
              <PublicRoute                  
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  user={this.props.auth}
                  component={route.component}
                  />
          ) : (null);
        });

        return (
            <Aux>
                <ScrollToTop>
                    <Suspense fallback={<Loader/>}>
                        <Switch>
                            {menu}

                            <PrivateRoute path="/" component={AdminLayout}  user={this.props.auth}  />
                        </Switch>
                    </Suspense>
                </ScrollToTop>
            </Aux>
        );
    }
}

const mapStateToProps = (state) => {
    console.log("state" + JSON.stringify(state))
    console.log("auth" + JSON.stringify(state.firebase.auth))
    return{
      authError: state.auth.authError,
      auth: state.firebase.auth
    }
  }
  
  export default connect(mapStateToProps)(App);

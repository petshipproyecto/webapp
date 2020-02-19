

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
import axios from 'axios'
import config from "./../config";
const rutaApi = config.rutaApi;


const AdminLayout = Loadable({
    loader: () => import('./layout/AdminLayout'),
    loading: Loader
});

class App extends Component {
    state = {isAdmin: false};

    isAdmin = ()=>{
        
    }
    componentDidMount(){
        axios.get(rutaApi + "usuario/" + this.props.userId)
        .then((user)=>{
            const isAdmin = user.data.Is_admin;
            this.setState({isAdmin})
            console.log('se repite  src/App/index.js')
        });

    }

     render() {
        //this.isAdmin();
        console.log('algo')
        
       
        const menu = routes.map((route, index) => {
        if (route.path === '/ChoosePet'){
            return (route.component) ? (
                <PrivateRoute                  
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    user={this.props.auth}
                    component={route.component}
                    isAdmin={this.state.isAdmin}
                    />
            ) : (null);

        }
            
          return (route.component) ? (
              <PublicRoute                  
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  user={this.props.auth}
                  component={route.component}                  
                  isAdmin={this.state.isAdmin}
                  />
          ) : (null);
        });

        return (
            <Aux>
                <ScrollToTop>
                    <Suspense fallback={<Loader/>}>
                        <Switch>
                            {menu}
                            
                            <PrivateRoute path="/" component={AdminLayout}  user={this.props.auth} isAdmin={this.state.isAdmin}  />
                        </Switch>
                    </Suspense>
                </ScrollToTop>
            </Aux>
        );
    }
}

const mapStateToProps = (state) => {
    //console.log("state" + JSON.stringify(state))
    //console.log("auth" + JSON.stringify(state.firebase.auth))
    return{ 
      authError: state.auth.authError,
      auth: state.firebase.auth,
      userId: state.firebase.auth.uid,
    }
  }
  
  export default connect(mapStateToProps)(App);

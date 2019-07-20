import React from 'react';
import {NavLink} from 'react-router-dom';

import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";
//import DEMO from "../../../store/constant";

class SignUp1 extends React.Component {
    render () {
        return(
            <Aux>
                <Breadcrumb/>
                <div className="auth-wrapper aut-bg-img">
                    <div className="auth-content">
                        <div className="card">
                            <div className="card-body text-center">
                                <div className="mb-4">
                                    <i className="feather icon-user-plus auth-icon"/>
                                </div>
                                <h3 className="mb-4">Registrarse</h3>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Nombre"/>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Apellido"/>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="email" className="form-control" placeholder="Email"/>
                                </div>
                                <div className="input-group mb-4">
                                    <input type="password" className="form-control" placeholder="Contraseña"/>
                                </div>
                                <button className="btn btn-primary shadow-2 mb-4">Registrarse</button>
                                <p className="mb-0 text-muted">Tiene una cuenta? <NavLink to="/auth/signin-1">Iniciar Sesión</NavLink></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default SignUp1;
import React from 'react';
import {NavLink} from 'react-router-dom';

import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";

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
                                    <i className="feather icon-unlock auth-icon"/>
                                </div>
                                <h3 className="mb-4">Iniciar Sesión</h3>
                                <div className="input-group mb-3">
                                    <input type="email" className="form-control" placeholder="Email"/>
                                </div>
                                <div className="input-group mb-4">
                                    <input type="password" className="form-control" placeholder="Contraseña"/>
                                </div>
                                <div className="form-group text-left">
                                    <div className="checkbox checkbox-fill d-inline">
                                        <input type="checkbox" name="checkbox-fill-1" id="checkbox-fill-a1" />
                                            <label htmlFor="checkbox-fill-a1" className="cr">Guardar Contraseña</label>
                                    </div>
                                </div>
                                <button className="btn btn-primary shadow-2 mb-4">Iniciar Sesión</button>
                                <p className="mb-2 text-muted">Olvidaste tu contraseña? <NavLink to="/auth/reset-password-1">Recupera tu Contraseña</NavLink></p>
                                <p className="mb-0 text-muted">No tienes cuenta? <NavLink to="/auth/signup-1">Registrate</NavLink></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default SignUp1;
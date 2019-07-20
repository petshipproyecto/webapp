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
                                    <i className="feather icon-mail auth-icon"/>
                                </div>
                                <h3 className="mb-4">Recuperar Contraseña</h3>
                                <div className="input-group mb-3">
                                    <input type="email" className="form-control" placeholder="Email"/>
                                </div>    
                                <button className="btn btn-primary shadow-2 mb-4">Recuperar Contraseña</button>

                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default SignUp1;
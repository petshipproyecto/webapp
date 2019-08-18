import React from "react";
import { NavLink } from "react-router-dom";

import "./../../../assets/scss/style.scss";
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";
//123456
//-----------Para la validacion importar estos elementos--------------
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
//---------------------------------------------------------------------
import { SocialIcon } from "react-social-icons";


class SignIn extends React.Component {
  render() {
    return (
      <Formik
        initialValues={{
          email: "",
          password: ""
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("El email tiene un formato invalido")
            .required("El email es obligatorio"),
          password: Yup.string()
            .min(6, "La contraseña debe tener al menos 6 caracteres")
            .max(20,"La contraseña debe tener como máximo 20 caracteres")
            .required("La contraseña es obligatoria")
        })}
        onSubmit={fields => {
          const { history } = this.props;
          history.push("/choosePet");
          //alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
        }}
        render={({ errors, status, touched }) => (
          <Form>
            <Aux>
              <Breadcrumb />
              <div className="auth-wrapper aut-bg-img">
                <div className="auth-content">
                  <div className="card">
                    <div className="card-body text-center">
                      <div className="mb-4">
                        <i className="feather icon-unlock auth-icon" />
                      </div>
                      <h4 className="mb-4">Iniciar Sesión con</h4>
                      <div className="form-group">
                        <SocialIcon
                          network="facebook"
                          url="http://facebook.com"
                          style={{ height: 32, width: 32 }}
                        />
                        &nbsp;&nbsp;
                        <SocialIcon
                          network="google"
                          url="http://google.com"
                          style={{ height: 32, width: 32 }}
                        />
                      </div>
                      <div className="form-group">
                        <Field
                          name="email"
                          placeholder="Email"
                          type="text"
                          className={
                            "form-control" +
                            (errors.email && touched.email ? " is-invalid" : "")
                          }
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="form-group">
                        <Field
                          placeholder="Contraseña"
                          name="password"
                          type="password"
                          className={
                            "form-control" +
                            (errors.password && touched.password
                              ? " is-invalid"
                              : "")
                          }
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>

                      <div className="form-group text-left">
                        <div className="checkbox checkbox-fill d-inline">
                          <input
                            type="checkbox"
                            name="checkbox-fill-1"
                            id="checkbox-fill-a1"
                          />
                          <label htmlFor="checkbox-fill-a1" className="cr">
                            Guardar Contraseña
                          </label>
                        </div>
                      </div>
                      <div className="form-group">
                        <button
                          type="submit"
                          className="btn btn-primary shadow-2 mb-4"
                        >
                          Iniciar Sesión
                        </button>
                      </div>
                      <p className="mb-2 text-muted">
                        Olvidaste tu contraseña?{" "}
                        <NavLink to="/resetPassword">
                          Recupera tu Contraseña
                        </NavLink>
                      </p>
                      <p className="mb-0 text-muted">
                        No tienes cuenta?{" "}
                        <NavLink to="/signUp">Registrate</NavLink>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Aux>
          </Form>
        )}
      />
    );
  }
}

export default SignIn;

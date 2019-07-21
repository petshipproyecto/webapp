import React from "react";
import { NavLink } from "react-router-dom";

import "./../../../assets/scss/style.scss";
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";
//import DEMO from "../../../store/constant";

//-----------Para la validacion importar estos elementos--------------
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
//---------------------------------------------------------------------

class SignUp extends React.Component {
  render() {
    return (
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: ""
        }}
        validationSchema={Yup.object().shape({
          firstName: Yup.string()
            .trim()
            .required("El nombre es obligatorio"),
          lastName: Yup.string()
            .trim()
            .required("El apellido es obligatorio"),
          email: Yup.string()
            .email("El email tiene un formato invalido")
            .required("El email es obligatorio"),
          password: Yup.string()
            .min(6, "La contraseña debe tener al menos 6 caracteres")
            .required("La contraseña es obligatoria")
        })}
        onSubmit={fields => {
          alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
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
                        <i className="feather icon-user-plus auth-icon" />
                      </div>
                      <h3 className="mb-4">Registrarse</h3>
                      <div className="form-group">
                        <Field
                          placeholder="Nombre"
                          name="firstName"
                          type="text"
                          className={
                            "form-control" +
                            (errors.firstName && touched.firstName
                              ? " is-invalid"
                              : "")
                          }
                        />
                        <ErrorMessage
                          name="firstName"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="form-group">
                        <Field
                          placeholder="Apellido"
                          name="lastName"
                          type="text"
                          className={
                            "form-control" +
                            (errors.lastName && touched.lastName
                              ? " is-invalid"
                              : "")
                          }
                        />
                        <ErrorMessage
                          name="lastName"
                          component="div"
                          className="invalid-feedback"
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

                      <div className="form-group">
                        <button
                          type="submit"
                          className="btn btn-primary shadow-2 mb-4"
                        >
                          Registrarse
                        </button>
                      </div>
                      <p className="mb-0 text-muted">
                        Tiene una cuenta?{" "}
                        <NavLink to="/auth/signin">Iniciar Sesión</NavLink>
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

export default SignUp;

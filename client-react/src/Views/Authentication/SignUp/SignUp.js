import React from "react";
import { NavLink } from "react-router-dom";

import "./../../../assets/scss/style.scss";
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";
//import DEMO from "../../../store/constant";
import axios from 'axios'

//-----------Para la validacion importar estos elementos--------------
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
//---------------------------------------------------------------------
import { SocialIcon } from "react-social-icons";

class SignUp extends React.Component {
  render() {
    return (
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          ubicacion:"",
          email: "",
          password: ""
        }}
        validationSchema={Yup.object().shape({
          firstName: Yup.string()
            .trim()
            .min(2,"El nombre debe tener como mínimo 2 caracteres")
            .max(20,"El nombre debe tener como máximo 20 caracteres")
            .required("El nombre es obligatorio"),
          lastName: Yup.string()
            .trim()
            .min(2,"El nombre debe tener como mínimo 2 caracteres")
            .max(20,"El nombre debe tener como máximo 20 caracteres")
            .required("El apellido es obligatorio"),
            ubicacion: Yup.string()
            .trim()
            .required("La ubicación es obligatoria"),
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
          history.push("/dashboard");

          //alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
          axios.post('https://petshipt-backend.herokuapp.com/usuario', {           
              "Email":fields.email,
              "Nombre": fields.firstName,
              "Apellido": fields.lastName,
              "Password": fields.password

          }).then(function (response) {
            // handle success
            alert('Se registro correctamente el Usuario');
            //alert("SUCCESS!! :-)\n\n" + JSON.stringify(response))
            console.log(response);
          })
          .catch(function (error) {
            // handle error
            alert('Error al registrar el usuario');
            //alert("ERROR!! :-(\n\n" + JSON.stringify(error))
            console.log(error);
          })
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
                     <h3 className="mb-4">Registrarse con</h3>
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
                      <h7>Todos los campos son obligatorios<span style={{color:'red'}}> *</span></h7>
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
                          placeholder="Ubicación"
                          name="ubicacion"
                          type="text"
                          className={
                            "form-control" +
                            (errors.ubicacion && touched.ubicacion
                              ? " is-invalid"
                              : "")
                          }
                        />
                        <ErrorMessage
                          name="ubicacion"
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
                        <NavLink to="/signIn">Iniciar Sesión</NavLink>
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

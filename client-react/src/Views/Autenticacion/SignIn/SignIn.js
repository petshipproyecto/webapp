import React from "react";
import { NavLink } from "react-router-dom";
import { signIn } from "../../../store/actions/user";
import "./../../../assets/scss/style.scss";
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";

//-----------Para la validacion importar estos elementos--------------
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
//---------------------------------------------------------------------
import { SocialIcon } from "react-social-icons";
import { connect } from "react-redux";
import { requestSignIn, signedIn } from "../../../store/actions/user";
import { auth } from "../../../store/firebase";
import { Link, withRouter } from "react-router-dom";
// Sweet Alert para los mensajes de exito y error
import swal from "sweetalert";

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
            .max(50, "Email debe tener como máximo 50 caracteres")
            .required("El email es obligatorio"),
          password: Yup.string()
            .min(6, "La contraseña debe tener al menos 6 caracteres")
            .max(20, "La contraseña debe tener como máximo 20 caracteres")
            .required("La contraseña es obligatoria")
        })}
        onSubmit={fields => {
          const { history } = this.props;

          this.props.signIn({ email: fields.email, password: fields.password });
                  
          
         // history.push("/choosePet");
          // if (this.props.authError) {
          //   history.push("/choosePet");
          //   swal({
          //     title: "Error!",
          //     text: "Error al iniciar sesion",
          //     icon: "error",
          //     timer: 2000,
          //     button: false
          //   })
          // }
          // console.log(this.props.auth)
          /*
          const {
            history,
          } = this.props;

          this.props.dispatch(requestSignIn())
          
          auth.doSignInWithEmailAndPassword(fields.email, fields.password).then(response => {
            this.props.dispatch(signedIn(response.user));
            if (response.user === undefined) {
              history.push('/signin');
            } else {
              history.push('/dashboard');
            }
          }).catch(e =>{
            alert(e)
          })
          */
          //history.push("/choosePet");
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
                      <h4 className="mb-4">Iniciar Sesión </h4>
                     {/* <div className="form-group">
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
        */}
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
                      {this.props.authError == true ? (
                        <div style={{ color: "red" }}>
                          Usuario o Contraseña Incorrecta
                        </div>
                      ) : (
                        <div></div>
                      )}

                      <div className="form-group text-left">
                        <div className="checkbox checkbox-fill d-inline">
                          <input
                            type="checkbox"
                            name="checkbox-fill-1"
                            id="checkbox-fill-a1"
                          />
                          {/* <label htmlFor="checkbox-fill-a1" className="cr">
                            Guardar Contraseña
                          </label>
                      */}
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
                        <NavLink to="/SignUp">Registrate</NavLink>
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

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);

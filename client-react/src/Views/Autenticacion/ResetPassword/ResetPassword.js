import React from "react";

import "./../../../assets/scss/style.scss";
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";
import firebase from '../../../configs/fbConfigs'
import swal from "sweetalert";

//-----------Para la validacion importar estos elementos--------------
import { Formik , Field, Form , ErrorMessage } from "formik";
import * as Yup from "yup";
//---------------------------------------------------------------------

class ResetPassword extends React.Component {
  state = {
    email: ""
  }

  handleInputChange = (e) =>{
    //console.log(e)
    //console.log(JSON.stringify(e.target))
  }
  handleSubmit = (emailAddress)=>{
    console.log(emailAddress);
    
    var auth = firebase.auth();
    

    if (emailAddress){
      auth.sendPasswordResetEmail(emailAddress).then(function() {
        swal({
          title: "Exito!",
          text: "Mail para recuperar contraseña enviado a " + emailAddress,
          icon: "success",
          timer: 2000,
          button: false
        });
      }).catch(function(error) {
        swal({
          title: "Error!",
          text: "Hubo un error, intente nuevamente",
          icon: "error",
          timer: 3000,
          button: false
        });
        // An error happened.
        console.log(JSON.stringify(error));
      });
    } else {
      swal({
        title: "Error!",
        text: "Por favor ingrese un email",
        icon: "error",
        timer: 3000,
        button: false
      });

    }
    

    
  }

  render() {
    return (
      <Formik
        initialValues={{
          email: ""
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("El email tiene un formato invalido")
            .max(50, "Email debe tener como máximo 50 caracteres")
            .required("El email es obligatorio")
        })}
        
        onSubmit={(values, { setSubmitting }) => {
          this.handleSubmit(values.email);
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
                        <i className="feather icon-mail auth-icon" />
                      </div>
                      <h3 className="mb-4">Recuperar Contraseña</h3>
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
                        <button
                          type="submit"
                          className="btn btn-primary shadow-2 mb-4"
                        >
                          Recuperar Contraseña
                        </button>
                      </div>
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

export default ResetPassword;

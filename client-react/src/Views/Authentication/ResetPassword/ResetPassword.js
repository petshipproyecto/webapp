import React from "react";

import "./../../../assets/scss/style.scss";
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";

//-----------Para la validacion importar estos elementos--------------
import { Formik , Field, Form , ErrorMessage } from "formik";
import * as Yup from "yup";
//---------------------------------------------------------------------

class ResetPassword extends React.Component {
  render() {

    return (
      <Formik
        initialValues={{
          email: ""
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("El email tiene un formato invalido")
            .required("El email es obligatorio")
        })}
        
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
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

import React from "react";
import {
  Row,
  Col,
  Card,
  Button
} from "react-bootstrap";

//-----------Para la validacion importar estos elementos--------------
import { Formik as Formik1 } from "formik";
import { Field as Field1 } from "formik";
import { Form as Form1 } from "formik";
import { ErrorMessage as ErrorMessage1 } from "formik";

import * as Yup1 from "yup";
//---------------------------------------------------------------------

class UpdatePassword extends React.Component {
  render() {
    return (
      <Formik1
        onSubmit={(fields,{ setSubmitting }) => {
          alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
        
        }}
        initialValues={{
          password: "",
          confirmPassword: ""
        }}
        validationSchema={Yup1.object().shape({
          password: Yup1.string()
            .min(6, "La contraseña al menos debe tener 6 caracteres")
            .required("La contraseña es obligatoria"),
          confirmPassword: Yup1.string()
            .oneOf(
              [Yup1.ref("password"), null],
              "Las contraseñas deben ser iguales"
            )
            .required("La confirmación de la contraseña es obligatoria")
        })}
        render={({ errors, status, touched, setFieldValue, handleSubmit }) => (
          <Form1 onSubmit={handleSubmit}>
            <Card>
              <Card.Header>
                <Card.Title as="h5">Modificar Contraseña</Card.Title>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col md={12}>
                  <div className="form-group">
                              <label>Nueva Contraseña</label>
                      <Field1
                        name="password"
                        type="password"
                        className={
                          "form-control" +
                          (errors.password && touched.password
                            ? " is-invalid"
                            : "")
                        }
                      />
                      <ErrorMessage1
                        name="password"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="form-group">
                              <label>Confirmar Contraseña</label>
                      <Field1
                        name="confirmPassword"
                        type="password"
                        className={
                          "form-control" +
                          (errors.confirmPassword && touched.confirmPassword
                            ? " is-invalid"
                            : "")
                        }
                      />
                      <ErrorMessage1
                        name="confirmPassword"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="form-group">
                      <Button
                        className="btn btn-primary shadow-2 mb-4"
                        type="button"
                        onClick={() => {
                          handleSubmit();
                        }}
                      >
                        Cambiar Contraseña
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Form1>
        )}
      />
    );
  }
}

export default UpdatePassword;

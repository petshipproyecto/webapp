import React from "react";
import {
  Row,
  Col,
  Card
} from "react-bootstrap";

import Aux from "../../hoc/_Aux";
import avatar1 from "../../assets/images/user/avatar1.jpg";

import { Form as FormB } from "react-bootstrap";

//-----------Para la validacion importar estos elementos--------------
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
//---------------------------------------------------------------------

import UpdatePassword from "../Authentication/UpdatePassword/UpdatePassword";

class FormUserProfile extends React.Component {
  render() {
    return (
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          ubicacion: "",
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
          ubicacion: Yup.string()
            .trim()
            .required("La ubicación es obligatoria"),
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
              <Row>
                <Col md={4}>
                  <Card>
                    <Card.Header>
                      <Card.Title as="h5">Perfil</Card.Title>
                    </Card.Header>
                    <Card.Body>
                      <center>
                        <img
                          className="rounded-circle"
                          style={{ width: "150px" , border:"solid 4px #f47386"}}
                          src={avatar1}
                          alt="activity-user"
                        />
                      </center>
                      <FormB.Group>
                      <br></br>
                        <center>
                          <input
                            id="file"
                            name="file"
                            type="file"
                            className="form-control"
                          />
                        </center>
                      </FormB.Group>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={8}>
                  <Card>
                    <Card.Header>
                      <Card.Title as="h5">Información del Usuario</Card.Title>
                    </Card.Header>
                    <Card.Body>
                      <Row>
                        <Col md={12}>
                          <FormB>
                            <FormB.Group>
                              <FormB.Label>Nombre</FormB.Label>
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
                            </FormB.Group>
                            <FormB.Group>
                              <FormB.Label>Apellido</FormB.Label>
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
                            </FormB.Group>
                            <FormB.Group>
                              <FormB.Label>Ubicación</FormB.Label>
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
                            </FormB.Group>

                            <FormB.Group>
                              <FormB.Label>Email</FormB.Label>
                              <Field
                                name="email"
                                placeholder="Email"
                                type="text"
                                className={
                                  "form-control" +
                                  (errors.email && touched.email
                                    ? " is-invalid"
                                    : "")
                                }
                              />
                              <ErrorMessage
                                name="email"
                                component="div"
                                className="invalid-feedback"
                              />
                            </FormB.Group>

                            <div className="form-group">
                              <button
                                type="submit"
                                className="btn btn-primary shadow-2 mb-4"
                              >
                                Guardar
                              </button>
                            </div>
                          </FormB>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                  <UpdatePassword></UpdatePassword>
                </Col>
              </Row>
            </Aux>
          </Form>
        )}
      />
    );
  }
}

export default FormUserProfile;

import React from "react";
import { Row, Col, Card } from "react-bootstrap";

import Aux from "../../hoc/_Aux";
import avatar2 from "../../assets/images/user/avatar-6.jpg";

import { Form as FormB } from "react-bootstrap";

//-----------Para la validacion importar estos elementos--------------
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
//---------------------------------------------------------------------

class FormPetProfile extends React.Component {
  render() {
    return (
      <Formik
        initialValues={{
          name: "",
          tipoAnimal: "",
          raza: "",
          edad: "",
          genero: ""
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string()
            .trim()
            .required("El nombre es obligatorio"),
          tipoAnimal: Yup.string()
            .trim()
            .required("El tipo de animal es obligatorio"),
          raza: Yup.string()
            .trim()
            .required("La raza es obligatoria"),
          edad: Yup.number("La edad debe ser un número")
            .typeError("La edad debe ser un número")
            .required("La edad es obligatoria")
            .positive("Tiene que ser un número  positivo")
            .integer("La edad debe ser un entero"),
          genero: Yup.string().required("El genero es obligatorio")
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
                          style={{
                            width: "150px",
                            border: "solid 4px #f47386"
                          }}
                          src={avatar2}
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
                      <Card.Title as="h5">Información de la Mascota</Card.Title>
                    </Card.Header>
                    <Card.Body>
                      <Row>
                        <Col md={12}>
                          <FormB>
                            <FormB.Group>
                              <FormB.Label>Nombre</FormB.Label>
                              <Field
                                placeholder="Nombre"
                                name="name"
                                type="text"
                                className={
                                  "form-control" +
                                  (errors.name && touched.name
                                    ? " is-invalid"
                                    : "")
                                }
                              />
                              <ErrorMessage
                                name="name"
                                component="div"
                                className="invalid-feedback"
                              />
                            </FormB.Group>
                            <FormB.Group>
                              <FormB.Label>Tipo de Animal</FormB.Label>
                              <Field
                                placeholder="Tipo de Animal"
                                name="tipoAnimal"
                                type="text"
                                className={
                                  "form-control" +
                                  (errors.tipoAnimal && touched.tipoAnimal
                                    ? " is-invalid"
                                    : "")
                                }
                              />
                              <ErrorMessage
                                name="tipoAnimal"
                                component="div"
                                className="invalid-feedback"
                              />
                            </FormB.Group>
                            <FormB.Group>
                              <FormB.Label>Raza</FormB.Label>
                              <Field
                                placeholder="Raza"
                                name="raza"
                                type="text"
                                className={
                                  "form-control" +
                                  (errors.raza && touched.raza
                                    ? " is-invalid"
                                    : "")
                                }
                              />
                              <ErrorMessage
                                name="raza"
                                component="div"
                                className="invalid-feedback"
                              />
                            </FormB.Group>
                            <FormB.Group>
                              <FormB.Label>Edad</FormB.Label>
                              <FormB.Control name="edad " as="select">
                                <option value="1 año" label="1 año" />
                                <option value="2 años" label="2 años" />
                                <option value="3 años" label="3 años" />
                                <option value="4 años" label="4 años" />
                                <option value="5 años" label="5 años" />
                                <option value="6 años" label="6 años" />
                                <option value="7 años" label="7 años" />
                                <option value="8 años" label="8 años" />
                                <option value="9 años" label="9 años" />
                                <option value="10 años" label="10 años" />
                                <option value="11 años" label="11 años" />
                                <option value="12 años" label="12 años" />
                                <option value="13 años" label="13 años" />
                                <option value="14 años" label="14 años" />
                              </FormB.Control>
                            </FormB.Group>
                            <FormB.Group>
                              <FormB.Label>Genero</FormB.Label>
                              <FormB.Control name="genero " as="select">
                                <option value="Macho" label="Macho" />
                                <option value="Hembra" label="Hembra" />
                              </FormB.Control>
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
                </Col>
              </Row>
            </Aux>
          </Form>
        )}
      />
    );
  }
}

export default FormPetProfile;

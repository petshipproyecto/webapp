import React from "react";
import {
  Row,
  Col,
  Card
} from "react-bootstrap";

import Aux from "../../hoc/_Aux";
import avatar2 from "../../assets/images/user/avatar-6.jpg";

import { Form as FormB } from "react-bootstrap";

//-----------Para la validacion importar estos elementos--------------
import { Formik, Field, Form, ErrorMessage} from "formik";
import * as Yup from "yup";
//---------------------------------------------------------------------

class FormNewPet extends React.Component {
  render() {
    return (
      <Formik
        initialValues={{
          name: "",
          tipoAnimal: "",
          raza: "",
          edad: "",
          genero: "",
          file: ""
        }}
        validationSchema={Yup.object().shape({
          file: Yup.mixed().required("La imagen es obligatoria"),

          name: Yup.string()
            .trim()
            .required("El nombre es obligatorio"),
          tipoAnimal: Yup.string()
            .trim()
            .required("El tipo de animal es obligatorio"),
          raza: Yup.string()
            .trim()
            .required("La raza es obligatoria"),
          edad: Yup.string()
            .trim()
            .required("La edad es obligatoria"),
          genero: Yup.string()
            .trim()
            .required("El genero es obligatorio")
        })}
        onSubmit={fields => {
          alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
        }}
        render={({ errors, status, touched, handleChange }) => (
          <Form>
            <Aux>
              <Row className="justify-content-md-center">
                <Col md={6}>
                  <Card>
                    <Card.Header>
                      <Card.Title as="h5">Agregar Nueva Mascota</Card.Title>
                    </Card.Header>
                    <Card.Body>
                      <Row>
                        <Col md={12}>
                          <FormB>
                            <center>
                              <img
                                className="rounded-circle"
                                style={{ width: "180px" , border:"solid 4px #f47386" }}
                                src={avatar2}
                                alt="activity-user"
                              />
                            </center>

                            <FormB.Group>
                              <br></br>

                              <input
                                id="file"
                                name="file"
                                type="file"
                                onChange={handleChange}
                                className={
                                  "form-control" +
                                  (errors.file && touched.file
                                    ? " is-invalid"
                                    : "")
                                }
                              />
                              <ErrorMessage
                                name="file"
                                component="div"
                                className="invalid-feedback"
                              />
                            </FormB.Group>

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
                            <center>
                              <div className="form-group">
                                <button
                                  type="submit"
                                  className="btn btn-primary shadow-2 mb-4"
                                >
                                  Guardar
                                </button>
                              </div>
                            </center>
                          </FormB>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                  {/* <UpdatePassword>  </UpdatePassword> */}
                </Col>
              </Row>
            </Aux>
          </Form>
        )}
      />
    );
  }
}

export default FormNewPet;

import React from "react";
import { Row, Col, Card } from "react-bootstrap";

import Aux from "../../hoc/_Aux";
import avatar2 from "../../assets/images/user/avatar-6.jpg";

//-----------Para la validacion importar estos elementos--------------
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
//---------------------------------------------------------------------
import axios from 'axios'
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
       
        onSubmit={fields => {
          
          axios.put('https://petshipt-backend.herokuapp.com/perfil/1', {           
              // payload
              "Nombre":fields.name,
              "Edad": fields.edad,
              "Imagen": fields.urlImagen,
              "Id_raza": fields.raza,
              "Id_genero": fields.genero

          }).then(function (response) {
            // handle success
            alert("SUCCESS!! :-)\n\n" + JSON.stringify(response))
            console.log(response);
          })
          .catch(function (error) {
            // handle error
            alert("ERROR!! :-(\n\n" + JSON.stringify(error))
            console.log(error);
          })
        }}
        render={({ errors, touched, handleChange }) => (
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
                      <div className="form-group">
                        <br></br>
                        <center>
                          <input
                            id="file"
                            name="file"
                            type="file"
                            className="form-control"
                          />
                        </center>
                      </div>
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
                          <Form>
                            <div className="form-group">
                              <label>Nombre</label>
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
                            </div>

                            <div class="form-group">
                              <label>Tipo de Animal</label>
                              <select
                                name="tipoAnimal"
                                onChange={handleChange}
                                className={
                                  "form-control" +
                                  (errors.tipoAnimal && touched.tipoAnimal
                                    ? " is-invalid"
                                    : "")
                                }
                              >
                                <option value="Ave" label="Ave" />
                                <option value="Caballo" label="Caballo" />
                                <option value="Conejo" label="Conejo" />
                                <option value="Gato" label="Gato" />
                                <option value="Hamster" label="Hamster" />
                                <option value="Perro" label="Perro" />
                                <option value="Pez" label="Pez" />
                                <option value="Tortuga" label="Tortuga" />
                                
                              </select>
                              <ErrorMessage
                                name="tipoAnimal"
                                component="div"
                                className="invalid-feedback"
                              />
                            </div>
                            <div class="form-group">
                              <label>Raza</label>
                              <select
                                name="raza"
                                onChange={handleChange}
                                className={
                                  "form-control" +
                                  (errors.raza && touched.raza
                                    ? " is-invalid"
                                    : "")
                                }
                              >
                                <option value="" label="Seleccionar Raza" />
                                <option value="1" label="Raza 1" />
                                <option value="2" label="Raza 2" />
                              </select>
                              <ErrorMessage
                                name="raza"
                                component="div"
                                className="invalid-feedback"
                              />
                            </div>
                            <div class="form-group">
                              <label>Edad</label>
                              <select
                                name="edad"
                                onChange={handleChange}
                                className={
                                  "form-control" +
                                  (errors.edad && touched.edad
                                    ? " is-invalid"
                                    : "")
                                }
                              >
                                <option value="" label="Seleccionar Edad" />
                                <option value="1" label="1 año" />
                                <option value="2" label="2 años" />
                                <option value="3" label="3 años" />
                                <option value="4" label="4 años" />
                                <option value="5" label="5 años" />
                                <option value="6" label="6 años" />
                                <option value="7" label="7 años" />
                                <option value="8" label="8 años" />
                                <option value="9" label="9 años" />
                                <option value="10" label="10 años" />
                                <option value="11" label="11 años" />
                                <option value="12" label="12 años" />
                                <option value="13" label="13 años" />
                                <option value="14" label="14 años" />
                              </select>
                              <ErrorMessage
                                name="edad"
                                component="div"
                                className="invalid-feedback"
                              />
                            </div>

                            <div class="form-group">
                              <label>Genero</label>
                              <select
                                name="genero"
                                onChange={handleChange}
                                className={
                                  "form-control" +
                                  (errors.genero && touched.genero
                                    ? " is-invalid"
                                    : "")
                                }
                              >
                                <option value="" label="Seleccionar Genero" />
                                <option value="1" label="Macho" />
                                <option value="2" label="Hembra" />
                              </select>
                              <ErrorMessage
                                name="genero"
                                component="div"
                                className="invalid-feedback"
                              />
                            </div>

                            <div className="form-group">
                              <button
                                type="submit"
                                className="btn btn-primary shadow-2 mb-4"
                              >
                                Guardar
                              </button>
                            </div>
                          </Form>
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

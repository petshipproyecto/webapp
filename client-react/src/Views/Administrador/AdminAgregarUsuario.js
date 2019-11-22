import React from "react";
import { Row, Col, Card } from "react-bootstrap";

import Aux from "../../hoc/_Aux";

import firebase from "firebase";
import { Formik, Field, Form,ErrorMessage} from "formik";
import axios from "axios";
import config from "../../config";
import FileUploader from "react-firebase-file-uploader";

import Avatar1 from "../../assets/images/user/avatar1.jpg";

const rutaApi = config.rutaApi;

const setTargetProfile = (Usr_cod, Id_perfil) => {
  axios
    .put(rutaApi + "usuario/" + Usr_cod, {
      Id_perfil_activo: Id_perfil
    })
    .then(response => {
      window.location.replace("/PetProfile");
    })
    .catch(e => {});
};

class AdminAgregarUsuario extends React.Component {
  render() {
    return (
      <Formik
        onSubmit={fields => {}}
        render={({ errors, handleChange, touched }) => (
          <Form>
            <Aux>
              <Row className="justify-content-md-center">
                <Col md={6}>
                  <Card>
                    <Card.Header>
                      <Card.Title as="h5">Agregar Nuevo Usuario</Card.Title>
                    </Card.Header>
                    <Card.Body>
                      <Row>
                        <Col md={12}>
                          <Form>
                            <center>
                              <img
                                className="img-radio"
                                src={Avatar1}
                                alt="activity-user"
                              />
                            </center>
                          </Form>
                          <br></br>
                          <center>
                            <div className="form-group">
                              <label
                                style={{
                                  backgroundColor: "#f47386",
                                  color: "white",
                                  padding: 10,
                                  borderRadius: 4,
                                  cursor:"pointer",
                                }}
                              >
                                Seleccionar Foto de Perfil
                                <FileUploader
                                  hidden
                                  accept="image/*"
                                  name="avatar"
                                  randomizeFilename
                                  storageRef={firebase.storage().ref("images")}
                                  onUploadStart={this.handleUploadStart}
                                  onUploadError={this.handleUploadError}
                                  onUploadSuccess={this.handleUploadSuccess}
                                  onProgress={this.handleProgress}
                                />
                              </label>

                              <ErrorMessage
                                name="file"
                                component="div"
                                className="invalid-feedback"
                              />
                            </div>
                          </center>

                          {/* Nombre */}
                          <div className="form-group">
                            <label>Nombre</label>
                            <Field
                              placeholder="Nombre"
                              name="Nombre"
                              type="text"
                              className="form-control"
                            />
                          </div>
                          {/* Apellido */}
                          <div className="form-group">
                            <label>Apellido</label>
                            <Field
                              placeholder="Apellido"
                              name="Apellido"
                              type="text"
                              className="form-control"
                            />
                          </div>
                          {/* Email */}
                          <div className="form-group">
                            <label>Email</label>
                            <Field
                              placeholder="Email"
                              name="Email"
                              type="text"
                              className="form-control"
                            />
                          </div>
                          {/* Ubicacion */}
                          <div className="form-group">
                            <label>Ubicación</label>
                            <Field
                              placeholder="Ubicación"
                              name="Ubicacion"
                              type="text"
                              className="form-control"
                            />
                          </div>
                          {/* Contraseña */}
                          <div className="form-group">
                            <label>Contraseña</label>
                            <Field
                              placeholder="Contraseña"
                              name="Contraseña"
                              type="password"
                              className="form-control"
                            />
                          </div>
                          <center>
                            <div className="form-group">
                              <button
                                type="submit"
                                className="btn btn-primary shadow-2 mb-4"
                              >
                                Guardar Usuario
                              </button>
                            </div>
                          </center>
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

export default AdminAgregarUsuario;

import React from "react";
import { Row, Col, Card } from "react-bootstrap";

import Aux from "../../hoc/_Aux";

import Avatar1 from "../../assets/images/user/avatar1.jpg";

import { Formik, Field, Form} from "formik";
import axios from "axios";
import config from "../../config";

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

class VerUserProfile extends React.Component {
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
                      <Card.Title as="h5">Perfil del Usuario</Card.Title>
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
                          {/* Nombre */}
                          <div className="form-group">
                            <label>Nombre</label>
                            <Field
                              readOnly
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
                              readOnly
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
                              readOnly
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
                              readOnly
                              placeholder="Ubicacion"
                              name="Ubicacion"
                              type="text"
                              className="form-control"
                            />
                          </div>
                          <center>
                            <div className="form-group">
                              <button
                                type="submit"
                                className="btn btn-primary shadow-2 mb-4"
                              >
                                Modificar Perfil
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

export default VerUserProfile;

import React from "react";
import { Row, Col, Card } from "react-bootstrap";

import Aux from "../../hoc/_Aux";
import avatar1 from "../../assets/images/user/avatar1.jpg";
import axios from "axios";
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";

import { connect } from 'react-redux';

//-----------Para la validacion importar estos elementos--------------
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
//---------------------------------------------------------------------

import UpdatePassword from "../Autenticacion/UpdatePassword/UpdatePassword";
import Axios from "axios";

// Sweet Alert para los mensajes de exito y error
import swal from "sweetalert";

class FormUserProfile extends React.Component {
  state = {
    initialValues: {
      firstName: "",
      lastName: "",
      idubicacion: "",
      ubicacion: "",
      email: "",
      password: ""
    }
  };
  componentDidMount() {
    // Obtiene los datos de usuario
    axios
      .get("https://petshipback-dev.herokuapp.com/usuario/" + this.props.userId) //this.props.userId
      .then(response => {
        var idubicacion = response.data.Id_ubicacion;
        this.setState({
          initialValues: {
            firstName: response.data.Nombre,
            lastName: response.data.Apellido,
            idubicacion: response.data.Id_ubicacion,
            email: response.data.Email,
            password: response.data.Password
          }
        });
        //Obtiene los datos de ubicacion
        axios
          .get(
            "https://petshipt-backend.herokuapp.com/ubicacion/" + idubicacion
          )
          .then(response => {
            this.setState({
              initialValues: {
                ubicacion: response.data.Descripcion
              }
            });
          });
      });
  }

  handleUploadSuccess = filename => {
    this.setState({ avatar: filename, progress: 100, isUploading: false });
    firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ avatarURL: url }));
  };

  render() {
    return (
      <Formik
        enableReinitialize
        // Setea los valores iniciales de los inputs
        initialValues={this.state.initialValues}
        onSubmit={fields => {
          //alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
          axios
            .put("https://petshipback-dev.herokuapp.com/usuario/" + this.props.userId, { //this.props.userId
              Email: fields.email,
              Nombre: fields.firstName,
              Apellido: fields.lastName
            })
            .then(function (response) {
              // handle success
              //alert("SUCCESS!! :-)\n\n" + JSON.stringify(response))
              console.log(response);
              swal({
                title: "Exito!",
                text: "Los datos del usuario se guardaron correctamente",
                icon: "success",
                timer: 2000,
                button: false
              });
            })
            .catch(function (error) {
              // handle error
              //alert("ERROR!! :-(\n\n" + JSON.stringify(error))
              console.log(error);
              swal({
                title: "Error!",
                text: "Error al guardar los datos del usuario",
                icon: "error",
                timer: 2000,
                button: false
              });
            });
        }}
        render={({ errors, touched }) => (
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
                          src={avatar1}
                          alt="activity-user"
                        />
                      </center>
                      <br></br>
                      <div className="form-group">
                        <br></br>
                        <center>
                          <FileUploader
                            accept="image/*"
                            name="avatar"
                            randomizeFilename
                            storageRef={firebase.storage().ref("images")}
                            onUploadStart={this.handleUploadStart}
                            onUploadError={this.handleUploadError}
                            onUploadSuccess={this.handleUploadSuccess}
                            onProgress={this.handleProgress}
                          />
                        </center>
                      </div>
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
                          <Form>
                            <div className="form-group">
                              <label>Nombre*</label>
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
                                required
                              />
                              <ErrorMessage
                                name="firstName"
                                component="div"
                                className="invalid-feedback"
                              />
                            </div>
                            <div className="form-group">
                              <label>Apellido*</label>
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
                                required
                              />
                              <ErrorMessage
                                name="lastName"
                                component="div"
                                className="invalid-feedback"
                              />
                            </div>
                            <div className="form-group">
                              <label>Ubicación*</label>
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
                                required
                              />
                              <ErrorMessage
                                name="ubicacion"
                                component="div"
                                className="invalid-feedback"
                              />
                            </div>
                            <div className="form-group">
                              <label>Email*</label>
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
                                required
                              />
                              <ErrorMessage
                                name="email"
                                component="div"
                                className="invalid-feedback"
                              />
                            </div>

                            <button
                              type="submit"
                              className="btn btn-primary shadow-2 mb-4"
                            >
                              Guardar
                            </button>
                          </Form>
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

const mapStateToProps = (state) => {
  //console.log("user profile" + JSON.stringify(state.firebase.auth.uid))
  return {
    userId: state.firebase.auth.uid,
    authError: state.auth.authError
  }
}



export default connect(mapStateToProps)(FormUserProfile)

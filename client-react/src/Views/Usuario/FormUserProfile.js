import React from "react";
import { Row, Col, Card } from "react-bootstrap";

import Aux from "../../hoc/_Aux";
import axios from "axios";
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";
import config from '../../config'

import { connect } from "react-redux";

//-----------Para la validacion importar estos elementos--------------
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
//---------------------------------------------------------------------

import UpdatePassword from "../Autenticacion/UpdatePassword/UpdatePassword";
import Img_usuario_anonimo from "../../assets/images/user/usuario_anonimo.png"
import Axios from "axios";

// Sweet Alert para los mensajes de exito y error
import swal from "sweetalert";

var rutaApi = config.rutaApi

class FormUserProfile extends React.Component {
  state = {
    Nombre: "",
    Apellido: "",
    Ubicacion: [],
    Email: "",
    urlImagen: null,
    Ubicacion: [],
    userId: null/* ,
    Email: "" */
  };
  componentDidMount() {
    // Obtiene los datos de usuario
    const uID = this.props.history.location.state.adminUser || this.props.userId;
    this.setState({userId: uID})
    console.log(JSON.stringify(this.props.history.location.state.adminUser) + 'adminUser')
    axios.get(rutaApi + "usuario/" + uID).then(response => {
      this.setState({
        Nombre: response.data.Nombre,
        Apellido: response.data.Apellido,
        Ubicacion: response.data.Ubicacion,
        urlImagen: response.data.Imagen
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
      .then(url => this.setState({ urlImagen: url }));
  };

  render() {
    return (
      <Formik
        enableReinitialize
        // Setea los valores iniciales de los inputs
        initialValues={{
          Nombre: this.state.Nombre,
          Apellido: this.state.Apellido
        }}
        validationSchema={Yup.object().shape({
          Nombre: Yup.string()
            .trim()
            .min(2, "El nombre debe tener como mínimo 2 caracteres")
            .max(20, "El nombre debe tener como máximo 20 caracteres")
            .required("El nombre es obligatorio"),
          Apellido: Yup.string()
            .trim()
            .min(2, "El nombre debe tener como mínimo 2 caracteres")
            .max(20, "El nombre debe tener como máximo 20 caracteres")
            .required("El apellido es obligatorio"),
          Ubicacion: Yup.string()
            .trim()
            .required("La ubicación es obligatoria")/* ,
          Email: Yup.string()
            .email("El email tiene un formato invalido")
            .max(50, "Email debe tener como máximo 50 caracteres")
            .required("El email es obligatorio") */
        })}
        onSubmit={fields => { 
          
          axios
            .put(rutaApi + "usuario/" + this.state.userId, {
              //this.props.userId
              /* Email: fields.Email, */
              Nombre: fields.Nombre,
              Apellido: fields.Apellido,
              Imagen: this.state.urlImagen
            })
            .then(function (response) {
              // handle success
              console.log(response);
              swal({
                title: "Exito!",
                text: "Los datos del usuario se guardaron correctamente",
                icon: "success",
                timer: 2000,
                button: false
              });
              window.location.replace('/Dashboard')

            })
            .catch(function (error) {
              // handle error
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
                          className="img-radio"
                          src={this.state.urlImagen || Img_usuario_anonimo}
                          alt="activity-user"
                        />
                      </center>
                      <br></br>
                      <div className="form-group">
                        <br></br>
                        <center>
                          <label
                            style={{
                              backgroundColor: "#f47386",
                              color: "white",
                              padding: 10,
                              borderRadius: 4,
                              cursor: "pointer",
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
                              <label>
                                Nombre <span style={{ color: "red" }}>*</span>{" "}
                              </label>
                              <Field
                                placeholder="Nombre"
                                name="Nombre"
                                type="text"
                                className={
                                  "form-control" +
                                  (errors.Nombre && touched.Nombre
                                    ? " is-invalid"
                                    : "")
                                }
                              />
                              <ErrorMessage
                                name="Nombre"
                                component="div"
                                className="invalid-feedback"
                              />
                            </div>
                            <div className="form-group">
                              <label>
                                Apellido <span style={{ color: "red" }}>*</span>{" "}
                              </label>
                              <Field
                                placeholder="Apellido"
                                name="Apellido"
                                type="text"
                                className={
                                  "form-control" +
                                  (errors.Apellido && touched.Apellido
                                    ? " is-invalid"
                                    : "")
                                }
                              />
                              <ErrorMessage
                                name="Apellido"
                                component="div"
                                className="invalid-feedback"
                              />
                            </div>
                            <div className="form-group">
                              <label>
                                Ubicación{" "}
                                <span style={{ color: "red" }}>*</span>{" "}
                              </label>
                              <Field
                                placeholder="Ubicación"
                                name="Ubicacion"
                                type="text"
                                className={
                                  "form-control" +
                                  (errors.Ubicacion && touched.Ubicacion
                                    ? " is-invalid"
                                    : "")
                                }
                              />
                              <ErrorMessage
                                name="Ubicacion"
                                component="div"
                                className="invalid-feedback"
                              />
                            </div>
                            {/*
                            <div className="form-group">
                              <label>
                                Email <span style={{ color: "red" }}>*</span>{" "}
                              </label>
                              <Field
                                readOnly
                                name="Email"
                                placeholder="Email"
                                type="text"
                                className={
                                  "form-control" +
                                  (errors.Email && touched.Email
                                    ? " is-invalid"
                                    : "")
                                }
                              />
                              <ErrorMessage
                                name="Email"
                                component="div"
                                className="invalid-feedback"
                              />
                            </div>
                          */}

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
                  {/*
                  <UpdatePassword></UpdatePassword>
                */}
                </Col>
              </Row>
            </Aux>
          </Form>
        )}
      />
    );
  }
}

const mapStateToProps = state => {
  //console.log("user profile" + JSON.stringify(state.firebase.auth.uid))
  return {
    userId: state.firebase.auth.uid,
    authError: state.auth.authError
  };
};

export default connect(mapStateToProps)(FormUserProfile);

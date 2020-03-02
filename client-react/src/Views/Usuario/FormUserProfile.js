import React from "react";
import { Row, Col, Card } from "react-bootstrap";

import Aux from "../../hoc/_Aux";
import axios from "axios";
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";
import config from "../../config";

import { connect } from "react-redux";

//-----------Para la validacion importar estos elementos--------------
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
//---------------------------------------------------------------------

import UpdatePassword from "../Autenticacion/UpdatePassword/UpdatePassword";
import Img_usuario_anonimo from "../../assets/images/user/usuario_anonimo.png";

import ProvinciaSelect from "./Select/selectProvincia";
import LocalidadSelect from "./Select/selectLocalidad";

// Sweet Alert para los mensajes de exito y error
import swal from "sweetalert";

var rutaApi = config.rutaApi;

class FormUserProfile extends React.Component {
  state = {
    Nombre: "",
    Apellido: "",
    Ubicacion: [],
    Email: "",
    urlImagen: null,
    Ubicacion: [],
    userId: null,
    provinciaSeleccionada: "", 
    Provincias: [],
    localidades: [],
    localidadSeleccionada: ""
     /* ,
    Email: "" */
  };
  componentDidMount() {
    let provinciaInicial = "";
    let localidadInicial = "";
    // Obtiene los datos de usuario
    const uID = this.props.history.location.state
      ? this.props.history.location.state.adminUser
      : this.props.userId;
    this.setState({ userId: uID });
    //console.log(JSON.stringify(this.props.history.location.state.adminUser) + 'adminUser')
    axios.get(rutaApi + "usuario/" + uID).then(response => {
      this.setState({
        Nombre: response.data.Nombre,
        Apellido: response.data.Apellido,
        urlImagen: response.data.Imagen
      });
      provinciaInicial = response.data.Localidad.Provincia.Id_provincia;
      localidadInicial = response.data.Localidad.Id_localidad;
      console.log('hola');
      axios.get(rutaApi + "provincia").then(response => {
        this.setState({
          Provincias: response.data
        });
      });
      axios.get(rutaApi + "localidad/" + provinciaInicial).then(response => {
        //console.log(JSON.stringify(response.data));
  
        var localidades = response.data;
        console.log(localidades[0] + "localidad");
        this.setState({
          localidades,
          provinciaSeleccionada: {
            Id_provincia: provinciaInicial
          },
          localidadSeleccionada: {
            Id_localidad: localidadInicial
          }
        });
        console.log(
          JSON.stringify(this.state.provinciaSeleccionada) + "on mount"
        );
      });
    });
    
    
   
  }

  
  _handleChangeProvincia = e => {
    var provinciaSeleccionada = this.state.Provincias.find(
      Provincia => Provincia.Id_provincia === e,
      null
    );
    console.log(provinciaSeleccionada);
    console.log(JSON.stringify(e));

    // call to API and save
    
    axios.get(rutaApi + "localidad/" + provinciaSeleccionada.Id_provincia).then(response => {
      //console.log(JSON.stringify(response.data));
      var localidades = response.data;
      this.setState({
        localidades,
        provinciaSeleccionada,
        localidadSeleccionada:localidades[0]
      });
      console.log('state' + JSON.stringify(this.state.provinciaSeleccionada))
    });  
  
    
  };

  _handleLocalidadChange = e => {
    var localidadSeleccionada = this.state.localidades.find(
      Localidad => Localidad.Id_localidad === e,
      null
    );
      this.setState({
        localidadSeleccionada
      });
      // alert(JSON.stringify(localidadSeleccionada));
     
  
    
  };

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
        onSubmit={fields => {
          
          axios
            .put(rutaApi + "usuario/" + this.state.userId, {
              //this.props.userId
              /* Email: fields.Email, */
              Nombre: fields.Nombre,
              Apellido: fields.Apellido,
              Imagen: this.state.urlImagen,
              Id_localidad: this.state.localidadSeleccionada.Id_localidad
            })
            .then(function(response) {
              // handle success
              console.log(response);
              swal({
                title: "Exito!",
                text: "Los datos del usuario se guardaron correctamente",
                icon: "success",
                timer: 2000,
                button: false
              });
            })
            .catch(function(error) {
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
                              cursor: "pointer"
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
                                Nombre
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
                                Apellido 
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

                            {/* Select Provincia */}
                            <div class="form-group">
                            <label>
                                Provincia 
                              </label>
                              <ProvinciaSelect
                                className={
                                  errors.Provincia ? " is-invalid" : ""
                                }
                                arrayOfData={this.state.Provincias}
                                name="Provincia"
                                onSelectChange={this._handleChangeProvincia}                                
                                value = {this.state.provinciaSeleccionada.Id_provincia}
                                do={this.log}
                              />
                              <ErrorMessage
                                name="Provincia"
                                component="div"
                                className="invalid-feedback"
                              />
                            </div>

                            {/* Select Localidad */}
                            <div class="form-group">
                            <label>
                                Localidad 
                              </label>
                              <LocalidadSelect
                                className={
                                  errors.Localidad ? " is-invalid" : ""
                                }
                                arrayOfData={this.state.localidades}
                                onSelectChange={this._handleLocalidadChange}
                                value = {this.state.localidadSeleccionada.Id_localidad}
                                
                              />
                              <ErrorMessage
                                name="Localidad"
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

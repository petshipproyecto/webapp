import React from "react";
import { Row, Col, Card } from "react-bootstrap";

import { connect } from "react-redux";
import Aux from "../../hoc/_Aux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import config from "../../config";
import FileUploader from "react-firebase-file-uploader";
import axios from 'axios'
import firebase from './../../configs/fbConfigs'
import ProvinciaSelect from './Select/selectProvincia'
import LocalidadSelect from './Select/selectLocalidad'
import swal from "sweetalert";

import Avatar1 from "../../assets/images/user/usuario_anonimo.png";

const rutaApi = config.rutaApi;

const setTargetProfile = (Usr_cod, Id_perfil) => {
  axios
    .put(rutaApi + "usuario/" + Usr_cod, {
      Id_perfil_activo: Id_perfil
    })
    .then(response => {
      window.location.replace("/PetProfile");
    })
    .catch(e => { });
};

class AdminAgregarUsuario extends React.Component {

  state = {
    urlImagen: null
  }
  componentDidMount() {

    axios.get(rutaApi + "provincia").then(response => {
      this.setState({
        Provincias: response.data,
      });
      axios.get(rutaApi + "localidad/23").then(response => {
        //console.log(JSON.stringify(response.data));

        var localidades = response.data;
        //console.log(localidades[0] + 'localidad')
        this.setState({
          localidades,
          provinciaSeleccionada: localidades[0],
          localidadSeleccionada: {
            "Id_localidad": "579"
          }
        });
        //console.log(JSON.stringify(this.state.provinciaSeleccionada) + 'on mount')
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
        provinciaSeleccionada
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
        onSubmit={(fields) => {
          console.log(fields);
          firebase.auth().createUserWithEmailAndPassword(fields.Email, fields.Contraseña)
            .then((resp) => {
              console.log('workds user')
              axios.post(rutaApi + 'usuario', {
                "Usr_cod": resp.user.uid,
                "Nombre": fields.Nombre,
                "Apellido": fields.Apellido,
                "Imagen": this.state.urlImagen,
                "Id_localidad": this.state.localidadSeleccionada.Id_localidad,
                "Email": fields.Email
              }).then(() => {
                swal({
                  title: "Éxito!",
                  text: "Los datos del usuario se guardaron correctamente",
                  icon: "success",
                  timer: 3000,
                  button: false
                });
                
                //window.location.reload();
              }).catch((err) => {
                swal({
                  title: "Error!",
                  text: "Los datos del usuario no se guardaron correctamente",
                  icon: "error",
                  timer: 3000,
                  button: false
                });

              });

            })
        }}
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
                                src={this.state.urlImagen || Avatar1}
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
                          {/* Select Provincia */}
                          <div class="form-group">
                          <label>Provincia</label>
                            <ProvinciaSelect
                              className={errors.Provincia ? " is-invalid" : ""}
                              arrayOfData={this.state.Provincias}
                              name="Provincia"
                              onSelectChange={this._handleChangeProvincia}

                            />
                            <ErrorMessage
                              name="Provincia"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                          {/* Select Localidad */}
                          <div class="form-group">
                          <label>Localidad</label>
                            <LocalidadSelect
                              className={errors.Localidad ? " is-invalid" : ""}
                              arrayOfData={this.state.localidades}
                              onSelectChange={this._handleLocalidadChange}

                            />
                            <ErrorMessage
                              name="Localidad"
                              component="div"
                              className="invalid-feedback"
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
const mapStateToProps = state => {
  // console.log("pet profile" + JSON.stringify(state.firebase.auth.uid))
  return {
    userId: state.firebase.auth.uid,
    authError: state.auth.authError
  };
};

export default connect(mapStateToProps)(AdminAgregarUsuario);

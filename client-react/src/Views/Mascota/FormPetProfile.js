import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";
import Aux from "../../hoc/_Aux";
import Img_mascota_anonima from "../../assets/images/user/mascota_anonima.png"
import axios from "axios";
import { connect } from "react-redux";
import config from '../../config'
import * as Yup from "yup";

// Componentes utilizados
import RazaSelect from "./Selects/RazaSelect";
import AnimalSelect from "./Selects/AnimalSelect";
import EdadSelect from "./Selects/EdadSelect";
import GeneroSelect from "./Selects/GeneroSelect";

// Para formulario y validacion
import { Formik, Field, Form, ErrorMessage } from "formik";

// Sweet Alert para los mensajes de exito y error
import swal from "sweetalert";
import { isNullOrUndefined } from "util";

var rutaApi = config.rutaApi

class FormPetProfile extends React.Component {
  state = {
    Nombre: "",
    urlImagen: null,
    Raza: null,
    Animal: null,
    Edad: "0",
    Genero: "0",
    Animales: [],
    Razas: []
  };

  async componentDidMount() {
    // Obtiene los datos del perfil
    const usuario = await axios.get(rutaApi + "usuario/" + this.props.userId);
    const perfil_activo = usuario.data.Id_perfil_activo;
    axios.get(rutaApi + "perfil/" + perfil_activo).then(response => {
      this.setState({
        Id_perfil: perfil_activo,
        Nombre: response.data.Nombre,
        Raza: response.data.Raza,
        Animal: response.data.Raza.Animal,
        Edad: response.data.Edad,
        Genero: response.data.Id_genero,
        urlImagen: response.data.Imagen
      });
      // Obtiene TODOS los tipos de animales
      axios.get(rutaApi + "animal").then(response => {
        var Razas_disponibles = null;
        this.state.Animal
          ? (Razas_disponibles = response.data.find(
              Animal => Animal.Id_animal === this.state.Animal.Id_animal
            ).Razas)
          : (Razas_disponibles = null);
        this.setState({
          Animales: response.data,
          Razas: Razas_disponibles
        });
      });
    });
  }

  _handleChangeAnimal = e => {
    var Animal_seleccionado = this.state.Animales.find(
      Animal => Animal.Id_animal === e,
      null
    );
    this.setState({
      Animal: Animal_seleccionado,
      Razas: Animal_seleccionado ? Animal_seleccionado.Razas : null,
      Raza: null
    });
  };

  _handleChangeRaza = e => {
    var Raza_seleccionada = this.state.Razas.find(
      Raza => Raza.Id_raza === e,
      null
    );
    this.setState({
      Raza: Raza_seleccionada
    });
  };

  _handleChangeEdad = e => {
    this.setState({
      Edad: e
    });
  };

  _handleChangeGenero = e => {
    this.setState({
      Genero: e
    });
  };

  handleUploadSuccess = filename => {
    //this.setState({ avatar: filename, progress: 100, isUploading: false });

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
        initialValues={{
          Nombre: this.state.Nombre
        }}
        validationSchema={Yup.object().shape({
          Nombre: Yup.string()
            .trim()
            .min(2, "El nombre debe tener como mínimo 2 caracteres")
            .max(20, "El nombre debe tener como máximo 20 caracteres"),
        })}
        validate={values => {
          let errors = {};
          if (!values.Nombre) errors.Nombre = "El nombre es requerido";
          if (this.state.Edad === "0") errors.Edad = "La edad es requerida";
          if (this.state.Animal == null)
            errors.Animal = "El Tipo de Animal es requerido";
          if (this.state.Raza == null) errors.Raza = "La Raza es requerida";
          if (this.state.Genero === "0")
            errors.Genero = "El Género es requerido";
          return errors;
        }}
        onSubmit={fields => {
          axios
            .put(rutaApi + "perfil/"+this.state.Id_perfil, {
              // payload
              Nombre: fields.Nombre,
              Edad: this.state.Edad,
              Imagen: this.state.urlImagen,
              Id_raza: this.state.Raza.Id_raza,
              Id_genero: this.state.Genero
            })
            .then(function(response) {
              // handle success
              console.log(response);
              swal({
                title: "Exito!",
                text: "Los datos de la mascota se guardaron correctamentes",
                icon: "success",
                timer: 2500,
                button: false
              });
              window.location.replace('/Dashboard')
            })
            .catch(function(error) {
              // handle error
              console.log(error);
              swal({
                title: "Error!",
                text: "Error al guardar los datos de la mascota",
                icon: "error",
                timer: 2500,
                button: false
              });
            });
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
                          className="img-radio"
                          src={this.state.urlImagen || Img_mascota_anonima}
                          alt="activity-user"
                        />
                      </center>
                      <div className="form-group">
                        <br></br>
                        <center>
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
                            {/* Nombre */}
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

                            {/* Select Animal */}
                            <div class="form-group">
                              <label>Tipo de Animal</label>
                              <AnimalSelect
                                className={errors.Animal ? " is-invalid" : ""}
                                arrayOfData={this.state.Animales}
                                onSelectChange={this._handleChangeAnimal}
                                value={
                                  this.state.Animal
                                    ? this.state.Animal.Id_animal
                                    : 0
                                }
                              />
                              <ErrorMessage
                                name="Animal"
                                component="div"
                                className="invalid-feedback"
                              />
                            </div>

                            {/* Select Raza */}
                            <div class="form-group">
                              <label>
                                Raza <span style={{ color: "red" }}>*</span>{" "}
                              </label>
                              <RazaSelect
                                className={
                                  errors.Raza && this.state.Razas
                                    ? " is-invalid"
                                    : ""
                                }
                                arrayOfData={this.state.Razas}
                                onSelectChange={this._handleChangeRaza}
                                value={
                                  this.state.Raza ? this.state.Raza.Id_raza : 0
                                }
                              />
                              <ErrorMessage
                                name="Raza"
                                component="div"
                                className="invalid-feedback"
                              />
                            </div>

                            {/* Select Edad */}
                            <div class="form-group">
                              <label>
                                Edad <span style={{ color: "red" }}>*</span>{" "}
                              </label>
                              <EdadSelect
                                className={errors.Edad ? " is-invalid" : ""}
                                onSelectChange={this._handleChangeEdad}
                                value={this.state.Edad}
                              />
                              <ErrorMessage
                                name="Edad"
                                component="div"
                                className="invalid-feedback"
                              />
                            </div>

                            {/* Select Genero */}
                            <div class="form-group">
                              <label>
                                Género <span style={{ color: "red" }}>*</span>{" "}
                              </label>
                              <GeneroSelect
                                className={errors.Genero ? " is-invalid" : ""}
                                onSelectChange={this._handleChangeGenero}
                                value={this.state.Genero}
                              />
                              <ErrorMessage
                                name="Genero"
                                component="div"
                                className="invalid-feedback"
                              />
                            </div>
                            {/*
                            <div class="form-group">
                              <label>
                                Deseo aparecer en las busquedas de :
                                <span style={{ color: "red" }}>*</span>{" "}
                              </label>
                              <br />
                              <div className="form-group text-left">
                                <div className="checkbox checkbox-fill d-inline">
                                  <input
                                    type="checkbox"
                                    name="pareja"
                                    id="pareja"
                                  />
                                  <label
                                    htmlFor="pareja"
                                    className="cr"
                                    style={{ color: "black" }}
                                  >
                                    Pareja
                                  </label>
                                </div>
                              </div>
                              <div className="form-group text-left">
                                <div className="checkbox checkbox-fill d-inline">
                                  <input
                                    type="checkbox"
                                    name="amigos"
                                    id="amigos"
                                  />
                                  <label
                                    htmlFor="amigos"
                                    className="cr"
                                    style={{ color: "black" }}
                                  >
                                    Amigos
                                  </label>
                                </div>
                              </div>
                            </div>
                          */}
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

const mapStateToProps = state => {
  //console.log("user profile" + JSON.stringify(state.firebase.auth.uid))
  return {
    userId: state.firebase.auth.uid,
    authError: state.auth.authError
  };
};

export default connect(mapStateToProps)(FormPetProfile);

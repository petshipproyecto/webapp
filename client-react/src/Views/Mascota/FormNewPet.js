import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { connect } from "react-redux";
import Aux from "../../hoc/_Aux";
import Img_mascota_anonima from "../../assets/images/user/mascota_anonima.png"
import axios from "axios";
import update from "react-addons-update"; // ES6
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";
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

var rutaApi = config.rutaApi

class FormNewPet extends React.Component {
  state = {
    Nombre: "",
    urlImagen: null,
    Animales: [],
    Razas: [],
    Raza: null,
    Animal: null,
    Edad: "0",
    Genero: "0"
  };

  componentDidMount() {
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

  handleUploadSuccess = filename => {
    //this.setState({ avatar: filename, progress: 100, isUploading: false });

    firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ urlImagen: url }));
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

  render() {
    return (
      <Formik
        enableReinitialize
        initialValues={{
          Nombre: ""
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
            errors.Animal = "El Tipo de Mascota es requerido";
          if (this.state.Raza == null) errors.Raza = "La Raza es requerida";
          if (this.state.urlImagen == null) errors.foto = "La Imagen es requerida";
          if (this.state.Genero === "0")
            errors.Genero = "El Género es requerido";
          return errors;
        }}
        onSubmit={fields => {
          axios
            .post(rutaApi + "perfil", {
              // payload
              Nombre: fields.Nombre,
              Edad: this.state.Edad,
              Imagen: this.state.urlImagen,
              Id_raza: this.state.Raza.Id_raza,
              Id_genero: this.state.Genero,
              Usr_cod: this.props.userId
            })
            .then(response => {
              // this.setState({ mensaje: "exito" });
              // handle success
              swal({
                title: "Exito!",
                text: "Se agrego correctamente la mascota",
                icon: "success",
                timer: 2000,
                button: false
              });
              window.location.replace('/Dashboard')
            })
            .catch(error => {
              // handle error
              //this.setState({ mensaje: "error" });
              console.log(error);
              swal({
                title: "Error!",
                text: "No se ha registrado la mascota",
                icon: "error",
                timer: 3000,
                button: false
              });
            });
        }}
        render={({ errors, touched, handleChange }) => (
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
                          <Form>
                            <center>
                              <img 
                                className="img-radio"
                                src={this.state.urlImagen || Img_mascota_anonima}
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
                                  required
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
                              <br/>
                              <label style={{color: "red"}}>{errors.foto}</label>
                            </div>
                          </center>

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
                            <label>
                              Tipo de Mascota{" "}
                              <span style={{ color: "red" }}>*</span>{" "}
                            </label>
                            <AnimalSelect
                              className={
                                errors.Animal && touched.Animal
                                  ? " is-invalid"
                                  : ""
                              }
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
                                errors.Raza && this.state.Razas && touched.Raza
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
                              className={
                                errors.Edad && touched.Edad ? " is-invalid" : ""
                              }
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
                              className={
                                errors.Genero && touched.Genero
                                  ? " is-invalid"
                                  : ""
                              }
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

export default connect(mapStateToProps)(FormNewPet);

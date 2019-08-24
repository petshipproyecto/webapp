import React from "react";
import { Row, Col, Card} from "react-bootstrap";

import Aux from "../../hoc/_Aux";
import avatar2 from "../../assets/images/user/avatar-6.jpg";
import axios from "axios";
import update from "react-addons-update"; // ES6
import RazaSelect from './RazaSelect';
import AnimalSelect from './AnimalSelect';
import EdadSelect from './EdadSelect';

//-----------Para la validacion importar estos elementos--------------
import { Formik, Field, Form, ErrorMessage } from "formik";
//import * as Yup from "yup";

//---------------------------------------------------------------------

// Sweet Alert para los mensajes de exito y error
import swal from "sweetalert";

var rutaapi = "http://localhost:3001"
rutaapi = "https://petshipt-backend.herokuapp.com"

class FormNewPet extends React.Component {

  state = {
    initialValues: {
      name: "",
      raza: "1",
      edad: "1",
      genero: "1"
    },
    animales: [],
    razas: [],
    raza: [],
    animal: [],
    edad: "1"
  };
  
  componentDidMount() {
    // Obtiene TODOS los tipos de animales
    axios
      .get(rutaapi+"/animal")
      .then(response => {
        this.setState({
          animales: response.data,
          animal: response.data.find(a => a.Id_animal === 6),// Por defecto selecciona el animal "6 - Perro"
          razas: response.data.Razas,
          raza: response.data.Razas.find(r => r.Id_raza === 1) // Por defecto selecciona la raza "1 - Akita"
        });
      });
  }

  _handleChangeAnimal = e => {
    var animal_seleccionado = this.state.animales.find(animal => animal.Id_animal === e);
    this.setState({
      animal : animal_seleccionado,
      razas : animal_seleccionado.Razas
    });
  };

  _handleChangeRaza = e => {
    var raza_seleccionada = this.state.razas.find(raza => raza.Id_raza === e);
    this.setState({
      raza : raza_seleccionada,
    });
  };

  _handleChangeEdad = e => {
    this.setState({
      edad : e
    });
  };

  componentDidMount() {
    // Obtiene TODOS los tipos de animales
    axios
    .get(rutaapi+"/animal")
    .then(response => {
      var razas_disponibles = response.data.find(animal => animal.Id_animal === this.state.animal.Id_animal);
      this.setState({
        animales: response.data,
        razas: razas_disponibles.Razas
      });
    });
  }

  render() {
    const generos = [
      {
        value: 1,
        Descripcion: "Macho"
      },
      {
        value: 2,
        Descripcion: "Hembra"
      }
    ];
    return (
      <Formik
        enableReinitialize
        initialValues={this.state.initialValues}
        onSubmit={fields => {
          axios
            .post(rutaapi+"/perfil", {
              // payload
              Nombre: fields.name,
              Edad: this.state.edad,
              Imagen: "fields.urlImagen",
              Id_raza: this.state.raza.Id_raza,
              Id_genero: fields.genero,
              Id_animal: fields.tipoAnimal
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
            })
            .catch(error => {
              // handle error
              //this.setState({ mensaje: "error" });
              console.log(error);
              swal({
                title: "Error!",
                text: "No se agrego correctamente la mascota",
                icon: "error",
                timer: 2000,
                button: false
              });
            });
        }}
        render={({ errors, touched, handleChange }) => (
          <Form>
            <Aux>
              {/* {this.state.mensaje == "exito" && (
                
                 <Alert variant={"succes"}>Se agrego la mascota correctamente</Alert>
              )} 
              {this.state.mensaje == "error" && (
                <Alert variant={"danger"}>Error al agregar nueva mascota</Alert>
              )} */}
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
                                className="rounded-circle"
                                style={{
                                  width: "180px",
                                  border: "solid 4px #f47386"
                                }}
                                src={avatar2}
                                alt="activity-user"
                              />
                            </center>
                          </Form>
                          <br></br>
                          <div className="form-group">
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
                          </div>
                          <div className="form-group">
                            <label>
                              Nombre <span style={{ color: "red" }}>*</span>{" "}
                            </label>
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
                              required
                            />
                            <ErrorMessage
                              name="name"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>

                          {/* Select Animales */}
                          <div class="form-group">
                            <label>Tipo de Animal</label>
                            <AnimalSelect arrayOfData={this.state.animales} onSelectChange={this._handleChangeAnimal} value={this.state.animal.Id_animal}/>
                            <ErrorMessage
                              name="tipoAnimal"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>

                          {/* Select Razas */}
                          <div class="form-group">
                            <label>Raza</label>
                            <RazaSelect arrayOfData={this.state.razas} onSelectChange={this._handleChangeRaza} value={this.state.raza.Id_raza}/>
                            <ErrorMessage
                              name="raza"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>

                          {/* Select Edad */}
                          <div class="form-group">
                            <label>Edad</label>
                            <EdadSelect onSelectChange={this._handleChangeEdad} value={this.state.edad}/>
                            <ErrorMessage
                              name="edad"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>

                          <div class="form-group">
                            <label>
                              Genero <span style={{ color: "red" }}>*</span>
                            </label>
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
                              {generos.map(element => {
                                return (
                                  <option
                                    value={element.value}
                                    label={element.Descripcion}
                                  />
                                );
                              })}
                            </select>
                            <ErrorMessage
                              name="genero"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
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

export default FormNewPet;


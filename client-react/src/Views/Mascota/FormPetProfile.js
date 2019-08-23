import React from "react";
import { Row, Col, Card } from "react-bootstrap";

import Aux from "../../hoc/_Aux";
import avatar2 from "../../assets/images/user/avatar-6.jpg";
import RazaSelect from './RazaSelect';
import AnimalSelect from './AnimalSelect';

//-----------Para la validacion importar estos elementos--------------
import { Formik, Field, Form, ErrorMessage } from "formik";
//import * as Yup from "yup";
//---------------------------------------------------------------------
import axios from "axios";

// Sweet Alert para los mensajes de exito y error
import swal from "sweetalert";

var rutaapi = "http://localhost:3001"
rutaapi = "https://petshipt-backend.herokuapp.com"

class FormPetProfile extends React.Component {
  state = {
    initialValues: {
      name: "",
      raza: "",
      edad: "",
      genero: ""
    },
    animales: [],
    razas: [],
    raza: [],
    animal: [],
    edades: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14"]
  };

  componentDidMount() {
    // Obtiene los datos del perfil
    axios
      .get(rutaapi+"/perfil/1")
      .then(response => {
        this.setState({
          initialValues: {
            name: response.data.Nombre,
            raza: response.data.Id_raza,
            edad: response.data.Edad,
            genero: response.data.Id_genero
          },
          raza: response.data.Raza,
          animal: response.data.Raza.Animal
        });
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

  render() {
    console.log(this.state);
    const generos = [
      {
        value: "1",
        Descripcion: "Macho"
      },
      {
        value: "2",
        Descripcion: "Hembra"
      }
    ];

    return (
      <Formik
        enableReinitialize
        initialValues={this.state.initialValues}
        onSubmit={fields => {
          axios
            .put(rutaapi+"/perfil/1", {
              // payload
              Nombre: fields.name,
              Edad: fields.edad,
              Imagen: fields.urlImagen,
              Id_raza: this.state.raza.Id_raza,
              Id_genero: fields.genero
            })
            .then(function(response) {
              // handle success
              //alert("SUCCESS!! :-)\n\n" + JSON.stringify(response))
              console.log(response);
              swal({
                title: "Exito!",
                text: "Los datos de la mascota se guardaron correctamente",
                icon: "success",
                timer: 2000,
                button: false
              });
            })
            .catch(function(error) {
              // handle error
              //alert("ERROR!! :-(\n\n" + JSON.stringify(error))
              console.log(error);
              swal({
                title: "Error!",
                text: "Error al guardar los datos de la mascota",
                icon: "error",
                timer: 2000,
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
                                required
                              />
                              <ErrorMessage
                                name="name"
                                component="div"
                                className="invalid-feedback"
                              />
                            </div>

                            <div class="form-group">
                              <label>Tipo de Animal</label>
                              <AnimalSelect arrayOfData={this.state.animales} onSelectChange={this._handleChangeAnimal} value={this.state.animal.Id_animal}/>
                              <ErrorMessage
                                name="tipoAnimal"
                                component="div"
                                className="invalid-feedback"
                              />
                            </div>
                            <div class="form-group">
                              <label>Raza</label>
                              <RazaSelect arrayOfData={this.state.razas} onSelectChange={this._handleChangeRaza} value={this.state.raza.Id_raza}/>
                              <ErrorMessage
                                name="raza"
                                component="div"
                                className="invalid-feedback"
                              />
                            </div>
                            <div class="form-group">
                              <label>Edad (años)</label>
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
                                {this.state.edades.map(element => {
                                  return element ==
                                    this.state.initialValues.edad ? (
                                    <option
                                      value={element}
                                      label={element}
                                      selected
                                    />
                                  ) : (
                                    <option value={element} label={element} />
                                  );
                                })}
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
                                {generos.map(element => {
                                  return element.value ==
                                    this.state.initialValues.genero ? (
                                    <option
                                      value={element.value}
                                      label={element.Descripcion}
                                      selected
                                    />
                                  ) : (
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

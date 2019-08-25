import React from "react";
import { Row, Col, Card } from "react-bootstrap";

import Aux from "../../hoc/_Aux";
import avatar2 from "../../assets/images/user/avatar-6.jpg";
import RazaSelect from './RazaSelect';
import AnimalSelect from './AnimalSelect';
import EdadSelect from './EdadSelect';
import GeneroSelect from './GeneroSelect';

//-----------Para la validacion importar estos elementos--------------
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
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
    raza: null,
    animal: null,
    edad: "0",
    genero: "0"
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
          animal: response.data.Raza.Animal,
          edad: response.data.Edad,
          genero: response.data.Id_genero
        });
        // Obtiene TODOS los tipos de animales
        axios
        .get(rutaapi+"/animal")
        .then(response => {
          var razas_disponibles = null
          this.state.animal ?
            razas_disponibles = response.data.find(animal => animal.Id_animal === this.state.animal.Id_animal).Razas :
            razas_disponibles = null;
          this.setState({
            animales: response.data,
            razas: razas_disponibles
          });
        });
      });
  }

  _handleChangeAnimal = e => {
    var animal_seleccionado = this.state.animales.find(animal => animal.Id_animal === e, null);
    this.setState({
      animal : animal_seleccionado,
      razas : animal_seleccionado ? animal_seleccionado.Razas : null
    });
  };

  _handleChangeRaza = e => {
    var raza_seleccionada = this.state.razas.find(raza => raza.Id_raza === e, null);
    this.setState({
      raza : raza_seleccionada,
    });
  };

  _handleChangeEdad = e => {
    this.setState({
      edad : e
    });
  };

  _handleChangeGenero = e => {
    this.setState({
      genero : e
    });
  };

  render() {

    return (
      <Formik
        enableReinitialize
        initialValues={this.state.initialValues}
        validate={(values) => {
          let errors = {};
          if(!values.name)
            errors.name = 'El nombre es requerido';
          if(this.state.edad == "0")
            errors.edad = 'La edad es requerida';
          if(this.state.animal == null)
            errors.animal = 'El Tipo de Animal es requerido';
          if(this.state.raza == null)
            errors.raza = 'La Raza es requerida';
          if(this.state.genero == "0")
            errors.genero = 'El Género es requerido';
          return errors;
       }}
        onSubmit={fields => {
          axios
            .put(rutaapi+"/perfil/1", {
              // payload
              Nombre: fields.name,
              Edad: this.state.edad,
              Imagen: "fields.urlImagen",
              Id_raza: this.state.raza.Id_raza,
              Id_genero: this.state.genero
            })
            .then(function(response) {
              // handle success
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
                              <label>Nombre <span style={{ color: "red" }}>*</span>{" "}</label>
                              <Field
                                placeholder="Nombre"
                                name="name"
                                type="text"
                                className={"form-control" + (errors.name && touched.name ? " is-invalid" : "")}
                              />
                              <ErrorMessage
                                name="name"
                                component="div"
                                className="invalid-feedback"
                              />
                            </div>

                            {/* Select Animal */}
                            <div class="form-group">
                              <label>Tipo de Animal</label>
                              <AnimalSelect
                                className={(errors.animal ? " is-invalid" : "")}
                                arrayOfData={this.state.animales}
                                onSelectChange={this._handleChangeAnimal}
                                value={this.state.animal ? this.state.animal.Id_animal : 0}
                              />
                              <ErrorMessage
                                name="animal"
                                component="div"
                                className="invalid-feedback"
                              />
                            </div>

                            {/* Select Raza */}
                            <div class="form-group">
                              <label>Raza <span style={{ color: "red" }}>*</span>{" "}</label>
                              <RazaSelect
                                className={(errors.raza && this.state.razas ? " is-invalid" : "")}
                                arrayOfData={this.state.razas}
                                onSelectChange={this._handleChangeRaza}
                                value={this.state.raza ? this.state.raza.Id_raza : 0}
                              />
                              <ErrorMessage
                                name="raza"
                                component="div"
                                className="invalid-feedback"
                              />
                            </div>
                            
                            {/* Select Edad */}
                            <div class="form-group">
                              <label>Edad <span style={{ color: "red" }}>*</span>{" "}</label>
                              <EdadSelect
                                className={(errors.edad ? " is-invalid" : "")}
                                onSelectChange={this._handleChangeEdad}
                                value={this.state.edad}
                              />
                              <ErrorMessage
                                name="edad"
                                component="div"
                                className="invalid-feedback"
                              />
                            </div>
                            
                            {/* Select Genero */}
                            <div class="form-group">
                              <label>Género <span style={{ color: "red" }}>*</span>{" "}</label>
                              <GeneroSelect
                                className={(errors.genero ? " is-invalid" : "")}
                                onSelectChange={this._handleChangeGenero}
                                value={this.state.genero}
                              />
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

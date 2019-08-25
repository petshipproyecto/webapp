import React from "react";
import { Row, Col, Card} from "react-bootstrap";

import Aux from "../../hoc/_Aux";
import avatar2 from "../../assets/images/user/avatar-6.jpg";
import axios from "axios";
import update from "react-addons-update"; // ES6
import RazaSelect from './RazaSelect';
import AnimalSelect from './AnimalSelect';
import EdadSelect from './EdadSelect';
import GeneroSelect from './GeneroSelect';

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
      edad: "0",
      genero: "1"
    },
    animales: [],
    razas: [],
    raza: null,
    animal: null,
    edad: "0",
    genero: "0"
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

  componentDidMount() {
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
  }

  render() {

    return (
      <Formik
        enableReinitialize
        initialValues={this.state.initialValues}
        validate={(values) => {
          let errors = {};
          console.log(this.state.edad == "0")
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
            .post(rutaapi+"/perfil", {
              // payload
              Nombre: fields.name,
              Edad: this.state.edad,
              Imagen: "fields.urlImagen",
              Id_raza: this.state.raza.Id_raza,
              Id_genero: this.state.genero,
              Id_animal: this.state.animal.Id_animal
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
                            <label>Nombre <span style={{ color: "red" }}>*</span>{" "}</label>
                            <Field
                              placeholder="Nombre"
                              name="name"
                              type="text"
                              className={"form-control" +(errors.name && touched.name ? " is-invalid" : "")}
                            />
                            <ErrorMessage
                              name="name"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>

                          {/* Select Animal */}
                          <div class="form-group">
                              <label>Tipo de Animal <span style={{ color: "red" }}>*</span>{" "}</label>
                              <AnimalSelect
                                className={(errors.animal && touched.animal ? " is-invalid" : "")}
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
                                className={(errors.raza && this.state.razas && touched.raza ? " is-invalid" : "")}
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
                                className={(errors.edad && touched.edad ? " is-invalid" : "")}
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
                                className={(errors.genero && touched.genero ? " is-invalid" : "")}
                                onSelectChange={this._handleChangeGenero}
                                value={this.state.genero}
                              />
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


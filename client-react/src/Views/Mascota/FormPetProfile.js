import React from 'react';
import { Row, Col, Card } from "react-bootstrap";

import Aux from "../../hoc/_Aux";
import avatar2 from "../../assets/images/user/avatar-6.jpg";
import axios from "axios";

// Componentes utilizados
import RazaSelect from './Selects/RazaSelect';
import AnimalSelect from './Selects/AnimalSelect';
import EdadSelect from './Selects/EdadSelect';
import GeneroSelect from './Selects/GeneroSelect';

// Para formulario y validacion
import { Formik, Field, Form, ErrorMessage } from "formik";

// Sweet Alert para los mensajes de exito y error
import swal from "sweetalert";

var rutaapi = "http://localhost:3001"
rutaapi = "https://petshipt-backend.herokuapp.com"


class FormPetProfile extends React.Component {
    
  state = {
    Nombre: "",
    Raza: null,
    Animal: null,
    Edad: "0",
    Genero: "0",
    Animales: [],
    Razas: []
  };

componentDidMount() {
// Obtiene los datos del perfil
axios
    .get(rutaapi+"/perfil/1")
    .then(response => {
        this.setState({
            Nombre: response.data.Nombre,
            Raza: response.data.Raza,
            Animal: response.data.Raza.Animal,
            Edad: response.data.Edad,
            Genero: response.data.Id_genero
        });
        // Obtiene TODOS los tipos de animales
        axios
            .get(rutaapi+"/animal")
            .then(response => {
                var Razas_disponibles = null
                this.state.Animal ?
                    Razas_disponibles = response.data.find(Animal => Animal.Id_animal === this.state.Animal.Id_animal).Razas :
                    Razas_disponibles = null;
                this.setState({
                    Animales: response.data,
                    Razas: Razas_disponibles
                });
            });
        });
}

_handleChangeAnimal = e => {
    var Animal_seleccionado = this.state.Animales.find(Animal => Animal.Id_animal === e, null);
    this.setState({
      Animal : Animal_seleccionado,
      Razas : Animal_seleccionado ? Animal_seleccionado.Razas : null
    });
  };

_handleChangeRaza = e => {
    var Raza_seleccionada = this.state.Razas.find(Raza => Raza.Id_raza === e, null);
    this.setState({
        Raza : Raza_seleccionada,
    });
};

_handleChangeEdad = e => {
    this.setState({
        Edad : e
    });
};

_handleChangeGenero = e => {
    this.setState({
        Genero : e
    });
};

render() {

    return (
      <Formik
        enableReinitialize
        initialValues={{
            Nombre: this.state.Nombre
        }}
        validate={(values) => {
          let errors = {};
          if(!values.Nombre)
            errors.Nombre = 'El nombre es requerido';
          if(this.state.Edad === "0")
            errors.Edad = 'La edad es requerida';
          if(this.state.Animal == null)
            errors.Animal = 'El Tipo de Animal es requerido';
          if(this.state.Raza == null)
            errors.Raza = 'La Raza es requerida';
          if(this.state.Genero === "0")
            errors.Genero = 'El Género es requerido';
          return errors;
        }}
        onSubmit={fields => {
          axios
            .put(rutaapi+"/perfil/1", {
              // payload
              Nombre: fields.Nombre,
              Edad: this.state.Edad,
              Imagen: "fields.urlImagen",
              Id_raza: this.state.Raza.Id_raza,
              Id_genero: this.state.Genero
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
                                name="Nombre"
                                type="text"
                                className={"form-control" + (errors.Nombre && touched.Nombre ? " is-invalid" : "")}
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
                                className={(errors.Animal ? " is-invalid" : "")}
                                arrayOfData={this.state.Animales}
                                onSelectChange={this._handleChangeAnimal}
                                value={this.state.Animal ? this.state.Animal.Id_animal : 0}
                              />
                              <ErrorMessage
                                name="Animal"
                                component="div"
                                className="invalid-feedback"
                              />
                            </div>

                            {/* Select Raza */}
                            <div class="form-group">
                              <label>Raza <span style={{ color: "red" }}>*</span>{" "}</label>
                              <RazaSelect
                                className={(errors.Raza && this.state.Razas ? " is-invalid" : "")}
                                arrayOfData={this.state.Razas}
                                onSelectChange={this._handleChangeRaza}
                                value={this.state.Raza ? this.state.Raza.Id_raza : 0}
                              />
                              <ErrorMessage
                                name="Raza"
                                component="div"
                                className="invalid-feedback"
                              />
                            </div>
                            
                            {/* Select Edad */}
                            <div class="form-group">
                              <label>Edad <span style={{ color: "red" }}>*</span>{" "}</label>
                              <EdadSelect
                                className={(errors.Edad ? " is-invalid" : "")}
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
                              <label>Género <span style={{ color: "red" }}>*</span>{" "}</label>
                              <GeneroSelect
                                className={(errors.Genero ? " is-invalid" : "")}
                                onSelectChange={this._handleChangeGenero}
                                value={this.state.Genero}
                              />
                              <ErrorMessage
                                name="Genero"
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

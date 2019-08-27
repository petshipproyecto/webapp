import React from "react";
import { Row, Col, Card} from "react-bootstrap";

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

class FormNewPet extends React.Component {

  state = {
    Nombre: "",
    Animales: [],
    Razas: [],
    Raza: null,
    Animal: null,
    Edad: "0",
    Genero: "0"
  };
  
  componentDidMount() {
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
          Nombre: ""
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
            .post(rutaapi+"/perfil", {
              // payload
              Nombre: fields.Nombre,
              Edad: this.state.Edad,
              Imagen: "fields.urlImagen",
              Id_raza: this.state.Raza.Id_raza,
              Id_genero: this.state.Genero,
              Id_animal: this.state.Animal.Id_animal
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
                              name="Nombre"
                              type="text"
                              className={"form-control" +(errors.Nombre && touched.Nombre ? " is-invalid" : "")}
                            />
                            <ErrorMessage
                              name="Nombre"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>

                          {/* Select Animal */}
                          <div class="form-group">
                              <label>Tipo de Animal <span style={{ color: "red" }}>*</span>{" "}</label>
                              <AnimalSelect
                                className={(errors.Animal && touched.Animal ? " is-invalid" : "")}
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
                                className={(errors.Raza && this.state.Razas && touched.Raza ? " is-invalid" : "")}
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
                                className={(errors.Edad && touched.Edad ? " is-invalid" : "")}
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
                                className={(errors.Genero && touched.Genero ? " is-invalid" : "")}
                                onSelectChange={this._handleChangeGenero}
                                value={this.state.Genero}
                              />
                              <ErrorMessage
                                name="Genero"
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

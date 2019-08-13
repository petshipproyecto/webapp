import React from "react";
import { Row, Col, Card } from "react-bootstrap";

import Aux from "../../hoc/_Aux";
import avatar2 from "../../assets/images/user/avatar-6.jpg";

//-----------Para la validacion importar estos elementos--------------
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
//---------------------------------------------------------------------
import axios from 'axios'
class FormPetProfile extends React.Component {
  state = {
    initialValues: {
      name: "",
      raza: "",
      edad: "",
      genero: ""
    },
    idtipoAnimal: "",
    tipoAnimalDesc: "",
    razaDesc: "",
    generoDesc: "",
    razas: [],
    animales: [],
    edades: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"]
  }



  componentDidMount() {
    // Obtiene los datos del perfil
    axios.get('https://petshipt-backend.herokuapp.com/perfil/1')
      .then(response => {
        var idtipoanimal = ""
        var idraza = response.data.Id_raza
        var idgenero = response.data.Id_genero
        this.setState({
          initialValues: {
            name: response.data.Nombre,
            raza: response.data.Id_raza,
            edad: response.data.Edad,
            genero: response.data.Id_genero
          }
        });
        // Obtiene TODAS las razas
        axios.get('https://petshipt-backend.herokuapp.com/raza')
          .then(response => {
            this.setState({
              razas: response.data
            })
          });
        // Obtiene TODOS los tipos de animales
        axios.get('https://petshipt-backend.herokuapp.com/animal')
          .then(response => {
            this.setState({
              animales: response.data
            })
          });

        // Obtiene los datos de la raza
        axios.get('https://petshipt-backend.herokuapp.com/raza/' + idraza)
          .then(response => {
            idtipoanimal = response.data.Id_animal
            this.setState({
              idtipoAnimal: response.data.Id_animal,
              razaDesc: response.data.Descripcion
            })
          });
        // Obtiene los datos del tipo de animal
        axios.get('https://petshipt-backend.herokuapp.com/animal/' + idtipoanimal)
          .then(response => {
            this.setState({
              tipoAnimalDesc: response.data.Descripcion
            })
          });
        // Obtiene los datos del genero
        axios.get('https://petshipt-backend.herokuapp.com/genero/' + idgenero)
          .then(response => {
            this.setState({
              genero: response.data.Id_genero,
              generoDesc: response.data.Descripcion
            })
          });
      })
  }

  _handleChangeAnimal = (event) => {
    this.setState({ idtipoAnimal: event.target.value })
  }

  render() {

    console.log(this.state)
    const generos = [{
      "value": "1",
      "Descripcion": "Macho"
    },
    {
      "value": "2",
      "Descripcion": "Hembra"
    }]

    return (

      <Formik
        enableReinitialize
        initialValues={this.state.initialValues}

        onSubmit={fields => {

          axios.put('https://petshipt-backend.herokuapp.com/perfil/1', {
            // payload
            "Nombre": fields.name,
            "Edad": fields.edad,
            "Imagen": fields.urlImagen,
            "Id_raza": fields.raza,
            "Id_genero": fields.genero

          }).then(function (response) {
            // handle success
            alert("SUCCESS!! :-)\n\n" + JSON.stringify(response))
            console.log(response);
          })
            .catch(function (error) {
              // handle error
              alert("ERROR!! :-(\n\n" + JSON.stringify(error))
              console.log(error);
            })
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
                              />
                              <ErrorMessage
                                name="name"
                                component="div"
                                className="invalid-feedback"
                              />
                            </div>

                            <div class="form-group">
                              <label>Tipo de Animal</label>
                              <select
                                name="tipoAnimal"
                                onChange={this._handleChangeAnimal}
                                className={
                                  "form-control" +
                                  (errors.tipoAnimal && touched.tipoAnimal
                                    ? " is-invalid"
                                    : "")
                                }

                              >

                                {this.state.animales.map(element => {
                                  return element.Id_animal == this.state.idtipoAnimal ? <option value={element.Id_animal} label={element.Descripcion} selected /> : <option value={element.Id_animal} label={element.Descripcion} />
                                })}
                              </select>
                              <ErrorMessage
                                name="tipoAnimal"
                                component="div"
                                className="invalid-feedback"
                              />
                            </div>
                            <div class="form-group">
                              <label>Raza</label>
                              <select
                                name="raza"
                                onChange={handleChange}
                                className={
                                  "form-control" +
                                  (errors.raza && touched.raza
                                    ? " is-invalid"
                                    : "")
                                }
                              >
                                {(this.state.razas && this.state.razas.length > 0) ?
                                  this.state.razas.map((raza) => {
                                    if (raza.Id_raza === this.state.initialValues.raza && raza.Id_animal === this.state.idtipoAnimal) {
                                      return <option selected="selected" key={raza.Id_raza} value={raza.Id_raza}>{raza.Descripcion}</option>
                                    } else {
                                      if (raza.Id_animal === this.state.idtipoAnimal) {
                                        return <option key={raza.Id_raza} value={raza.Id_raza}>{raza.Descripcion}</option>
                                      }
                                    }
                                  }) : (<option key={1}>No se han encontrado razas</option>)
                                }
                                {/* <option value="" label="Seleccionar Raza" />
                              <option value="1" label="Raza 1" />
                              <option value="2" label="Raza 2" /> */}
                              </select>
                              <ErrorMessage
                                name="raza"
                                component="div"
                                className="invalid-feedback"
                              />
                            </div>
                            <div class="form-group">
                              <label>Edad</label>
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
                                <option value="" label="Seleccionar Edad" />
                                <option value="1" label="1 año" />
                                <option value="2" label="2 años" />
                                <option value="3" label="3 años" />
                                <option value="4" label="4 años" />
                                <option value="5" label="5 años" />
                                <option value="6" label="6 años" />
                                <option value="7" label="7 años" />
                                <option value="8" label="8 años" />
                                <option value="9" label="9 años" />
                                <option value="10" label="10 años" />
                                <option value="11" label="11 años" />
                                <option value="12" label="12 años" />
                                <option value="13" label="13 años" />
                                <option value="14" label="14 años" />
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
                                  return element.value == this.state.initialValues.genero ? <option value={element.value} label={element.Descripcion} selected /> : <option value={element.value} label={element.Descripcion} />
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

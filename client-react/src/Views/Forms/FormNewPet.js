import React from "react";
import {
  Row,
  Col,
  Card
} from "react-bootstrap";

import Aux from "../../hoc/_Aux";
import avatar2 from "../../assets/images/user/avatar-6.jpg";
import axios from 'axios'


//-----------Para la validacion importar estos elementos--------------
import { Formik, Field, Form, ErrorMessage} from "formik";
import * as Yup from "yup";
//---------------------------------------------------------------------

class FormNewPet extends React.Component {

  state = {
    initialValues : {
      name: "",
      raza: "",
      edad: "",
      genero: ""
    },
    idtipoAnimal: "",
    generos : [],
    razas : [],
    animales : [],
    edades : [{valor: "0"},
              {valor: "1"},
              {valor: "2"},
              {valor: "3"},
              {valor: "4"},
              {valor: "5"},
              {valor: "6"},
              {valor: "7"},
              {valor: "8"},
              {valor: "9"},
              {valor: "10"},
              {valor: "11"},
              {valor: "12"},
              {valor: "13"},
              {valor: "14"}]
  }

  componentDidMount() {
    // Obtiene TODOS los tipos de animales
    axios.get('https://petshipt-backend.herokuapp.com/genero')
    .then(response =>{
      this.setState({
       generos: response.data
      })
    });
   // Obtiene TODAS las razas
   axios.get('https://petshipt-backend.herokuapp.com/raza')
   .then(response =>{
     this.setState({
      razas: response.data
     })
   });
   // Obtiene TODOS los tipos de animales
   axios.get('https://petshipt-backend.herokuapp.com/animal')
   .then(response =>{
     this.setState({
      animales: response.data
     })
   });
  }

  _handleChangeAnimal = (event) => {
    this.setState({ idtipoAnimal: event.target.value })
  }

  render() {
    return (
      <Formik
        initialValues={{
          name: "",
          tipoAnimal: "",
          raza: "",
          edad: "",
          genero: "",
          urlImagen: ""
        }}
       
        onSubmit = {(fields) => {
          //alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
          axios.post('https://petshipt-backend.herokuapp.com/perfil', {           
              // payload
              "Nombre":fields.name,
              "Edad": fields.edad,
              "Imagen": fields.urlImagen,
              "Id_raza": fields.raza,
              "Id_genero": fields.genero,
              "Id_Animal": fields.tipoAnimal           
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
        render={({ errors, handleChange, touched}) => (
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
                                style={{ width: "180px" , border:"solid 4px #f47386" }}
                                src={avatar2}
                                alt="activity-user"
                              />
                            </center></Form> 
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
                                {(this.state.animales && this.state.animales.length > 0) ?
                                  this.state.animales.map((animal) => {
                                    return <option key={animal.Id_animal} value={animal.Id_animal}>{animal.Descripcion}</option>
                                  }) : (<option key={1}>No se han encontrado animales</option>)
                                }
                                {/* <option
                                  value=""
                                  label="Seleccionar tipo de animal"
                                />
                                <option value="Gato" label="Gato" />
                                <option value="Perro" label="Perro" /> */}
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
                                {this.state.razas.map((raza) => {
                                    if (raza.Id_animal === this.state.idtipoAnimal){
                                      return <option key={raza.Id_raza} value={raza.Id_raza}>{raza.Descripcion}</option>
                                    }
                                  })
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
                                {(this.state.generos && this.state.generos.length > 0) ?
                                  this.state.generos.map((genero) => {
                                    return <option key={genero.Id_genero} value={genero.Id_genero}>{genero.Descripcion}</option>
                                  }) : (<option key={1}>No se han encontrado géneros</option>)
                                }
                                {/* <option value="" label="Seleccionar Genero" />
                                <option value="1" label="Macho" />
                                <option value="2" label="Hembra" /> */}
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
                                  className="btn btn-primary shadow-2 mb-4">
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

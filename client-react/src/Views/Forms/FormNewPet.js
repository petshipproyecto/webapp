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
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
//---------------------------------------------------------------------

class FormNewPet extends React.Component {
 

  _handleChangeAnimal= (event) =>{
    let razas = []
    console.log(event.target.value)
    this.state.todasRazas.forEach(element => {
      console.log(element)
      if (element.Id_animal == (event.target.value).toString()) {
        console.log("entra")
        razas.push(element);
      }
    });
    this.setState(
      {
        razas: razas
      }
    )
    console.log('state' + JSON.stringify(this.state))
  }
  

 

  state = {
    initialValues : {
      name: "",
      raza: "",
      edad: "1",
      genero: "",
      tipoAnimal:"4"
    },
    todasRazas:[],
    idtipoAnimal:4,
    generos : [],
    razas : [],
    todasRazas:[],
    animales : [],
    edades : ["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14"]
  }

  componentDidMount() {
    
   
   // Obtiene TODAS las razas
   axios.get('https://petshipt-backend.herokuapp.com/raza')
   .then(response =>{
     this.setState({
      todasRazas: response.data
     })
     let razas = [];
   this.state.todasRazas.forEach(element => {
    console.log(element)
    if (element.Id_animal == 4) {
      razas.push(element);
    }
  });
  this.setState(
    {
      razas: razas
    }
  )
  console.log('state' + JSON.stringify(this.state))

   });
   // Obtiene TODOS los tipos de animales
   axios.get('https://petshipt-backend.herokuapp.com/animal')
   .then(response =>{
     this.setState({
      animales: response.data
     })
   });
   
  
  }

  

  render(){
    const generos = [{
      "value": 1,
      "Descripcion": "Macho"
    },
    {
      "value": 2,
      "Descripcion": "Hembra"
    }]
    return (
      <Formik
      enableReinitialize
        initialValues={this.state.initialValues}

        onSubmit={(fields) => {
          //alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
          axios.post('https://petshipt-backend.herokuapp.com/perfil', {
            // payload
            "Nombre": fields.name,
            "Edad": fields.edad,
            "Imagen": "fields.urlImagen",
            "Id_raza": fields.raza,
            "Id_genero":fields.genero,
            "Id_animal": fields.tipoAnimal
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
                                style={{ width: "180px", border: "solid 4px #f47386" }}
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

{this.state.animales.map(element => {
                                  return <option key={element.Id_animal} value={element.Id_animal} label={element.Descripcion}  /> 
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
                             {this.state.razas.map(element => {
                                  return  <option key={element.Id_raza} value={element.Id_raza} label={element.Descripcion}  /> 
                                })}
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
                                  return <option value={element.value} label={element.Descripcion}  />
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

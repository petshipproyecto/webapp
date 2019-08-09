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
  render() {
    return (
      <Formik
        initialValues={{
          name: "",
          tipoAnimal: "Ave",
          raza: "Akita",
          edad: "1 año",
          genero: "Macho",
          file: ""
        }}
       
        onSubmit = {(fields) => {
          //alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
          axios.post('https://petshipt-backend.herokuapp.com/perfil', {           
              // payload
              "Nombre":fields.name,
              "Edad": fields.edad,
              "Imagen": "url"           
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
                              <label>Nombre<span style={{color:'red'}}> *</span></label>
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
                              <label>Tipo de Mascota<span style={{color:'red'}}> *</span></label>
                              <select
                                name="tipoAnimal"
                                onChange={handleChange}
                                className={
                                  "form-control" +
                                  (errors.tipoAnimal && touched.tipoAnimal
                                    ? " is-invalid"
                                    : "")
                                }
                              >
                                <option value="Ave" label="Ave" />
                                <option value="Caballo" label="Caballo" />
                                <option value="Conejo" label="Conejo" />
                                <option value="Gato" label="Gato" />
                                <option value="Hamster" label="Hamster" />
                                <option value="Perro" label="Perro" />
                                <option value="Pez" label="Pez" />
                                <option value="Tortuga" label="Tortuga" />
                              </select>
                              <ErrorMessage
                                name="tipoAnimal"
                                component="div"
                                className="invalid-feedback"
                              />
                            </div>
                            <div class="form-group">
                              <label>Raza <span style={{color:'red'}}> *</span></label>
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
                                <option value="Akita" label="Akita" />
                                <option value="Akita Americano" label="Akita Americano" />
                                <option value="Afgano" label="Afgano" />
                                <option value="Airelade Terrier" label="Airelade Terrier" />
                                <option value="Alaskan Malamute" label="Alaskan Malamute" />
                                <option value="American Pitt Bull Terrier" label="American Pitt Bull Terrier" />
                                <option value="American Staffordshire Terrier" label="American Staffordshire Terrier" />
                                <option value="Abisinio" label="Abisinio" />
                                <option value="Ashera" label="Ashera" />
                                <option value="Australian Mist" label="Australian Mist" />
                                <option value="Azul rojo" label="Azul rojo" />
                                <option value="Balines" label="Balines" />
                                <option value="Bengala o Bengali" label="Bengala o Bengali" />
                                <option value="Birmano" label="Birmano" />
                                <option value="Bombay" label="Bombay" />
                                <option value="Carey" label="Carey" />
                                <option value="Cumberland" label="Cumberland" />
                                <option value="Laud" label="Laud" />
                                <option value="Mediterranea" label="Mediterranea" />
                                <option value="Orejas Rojas" label="Orejas Rojas" />
                              </select>
                              <ErrorMessage
                                name="raza"
                                component="div"
                                className="invalid-feedback"
                              />
                            </div>
                            <div class="form-group">
                              <label>Edad<span style={{color:'red'}}> *</span></label>
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
                              <label>Genero<span style={{color:'red'}}> *</span></label>
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
                                <option value="Macho" label="Macho" />
                                <option value="Hembra" label="Hembra" />
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
                            <label><span style={{color:'red'}}>*</span> Campo Obligatorio</label>
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

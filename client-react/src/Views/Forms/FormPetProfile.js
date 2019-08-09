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
  render() {
    return (
      <Formik
        initialValues={{
          name: "",
          tipoAnimal: "Ave",
          raza: "Akita",
          edad: "1 año",
          genero: "Macho"
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string()
            .trim()
            .required("El nombre es obligatorio"),
          tipoAnimal: Yup.string()
            .trim()
            .required("El tipo de animal es obligatorio"),
          raza: Yup.string()
            .trim()
            .required("La raza es obligatoria"),
          edad: Yup.string()
            .trim()
            .required("La edad es obligatoria"),
          genero: Yup.string()
            .trim()
            .required("El genero es obligatorio")
        })}
        onSubmit={fields => {
          alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
          axios.put('https://petshipt-backend.herokuapp.com/perfil', {           
              // payload
              "some":123           
          }).then(function (response) {
            // handle success
            //alert("SUCCESS!! :-)\n\n" + JSON.stringify(response))
            console.log(response);
          })
          .catch(function (error) {
            // handle error
           // alert("ERROR!! :-(\n\n" + JSON.stringify(error))
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
                      <div>
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
                              <label>Nombre <span style={{color:'red'}}>*</span></label> 
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
                              <label>Tipo de Mascota <span style={{color:'red'}}>*</span></label>
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
                              <label>Raza <span style={{color:'red'}}>*</span></label>
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
                                //ID=6
                                <option value="Akita" label="Akita" />
                                <option value="Akita Americano" label="Akita Americano" />
                                <option value="Afgano" label="Afgano" />
                                <option value="Airelade Terrier" label="Airelade Terrier" />
                                 <option value="Alaskan Malamute" label="Alaskan Malamute" />
                                <option value="American Pitt Bull Terrier" label="American Pitt Bull Terrier" />
                                <option value="American Staffordshire Terrier" label="American Staffordshire Terrier" />
                                {/*<option value="American water Spaniel" label="American water Spaniel" />
                                <option value="Antiguo Pastor Ingles" label="Antiguo Pastor Ingles" />
                                <option value="Australian Kelpie" label="Australian Kelpie" />
                                <option value="Australian Shepherd" label="Australian Shepherd" />
                                <option value="Barzoi" label="Barzoi" />
                                <option value="Basset Azul de Gaseogne" label="Basset Azul de Gaseogne" />
                                <option value="Basset Hound" label="Basset Hound" />
                                <option value="Basset leonado de Bretaña" label="Basset leonado de Bretaña" />
                                <option value="Beagle" label="Beagle" />
                                <option value="Bearded Collie" label="Bearded Collie" />
                                <option value="Beauceron" label="Beauceron" />
                                <option value="Berger Blanc Suisse" label="Berger Blanc Suisse" />
                                <option value="Bichon Frise" label="Bichon Frise" />
                                <option value="Bichon Habanero" label="Bichon Habanero" />
                                <option value="Bichon Maltes" label="Bichon Maltes" />
                                <option value="Bloodhound" label="Bloodhound" />
                                <option value="Bobtail" label="Bobtail" />
                                <option value="Border Collie" label="Border Collie" />
                                <option value="Borzoi" label="Borzoi" />
                                <option value="Boston Terrier" label="Boston Terrier" />
                                <option value="Boxer" label="Boxer" />
                                <option value="Boyero Australiano" label="Boyero Australiano" />
                                <option value="Boyero de Flandes" label="Boyero de Flandes" />
                                <option value="Boyero de Montaña Bernes" label="Boyero de Montaña Bernes" />
                                <option value="Braco Aleman" label="Braco Aleman" />
                                <option value="Braco de Weimar" label="Braco de Weimar" />
                                <option value="Braco Hungaro" label="Braco Hungaro" />
                                <option value="Briard" label="Briard" />
                                <option value="Bull Terrier" label="Bull Terrier" />
                                <option value="Bulldog Americano" label="Bulldog Americano" />
                                <option value="Bulldog Frances" label="Bulldog Frances" />
                                <option value="Bulldog Ingles" label="Bulldog Ingles" />
                                <option value="Bullmastiff" label="Bullmastiff" />
                                <option value="Ca de Bou" label="Ca de Bou" />
                                <option value="Ca me mallorque" label="Ca me mallorque" />
                                <option value="Cane Corso" label="Cane Corso" />
                                <option value="Caniche" label="Caniche" />
                                <option value="Carlino" label="Carlino" />
                                <option value="Chien de Saint Hubert" label="Chien de Saint Hubert" />
                                <option value="Chihuahua" label="Chihuahua" />
                                <option value="Chino Crestado" label="Chino Crestado" />
                                <option value="Chow Chow" label="Chow Chow" />
                                <option value="Cirneco del Etna" label="Cirneco del Etna" />
                                <option value="Cocker Spaniel Ingles" label="Cocker Spaniel Ingles" />
                                <option value="Collie" label="Collie" />
                                <option value="Coton de Tulear" label="Coton de Tulear" />
                                <option value="Dachshunds" label="Dachshunds" />
                                <option value="Dalmata" label="Dalmata" />
                                <option value="Deutsch Drahthaar" label="Deutsch Drahthaar" />
                                <option value="Deutsch Kurzhaar" label="Deutsch Kurzhaar" />
                                <option value="Dobermann" label="Dobermann" />
                                <option value="Dogo Aleman" label="Dogo Aleman" />
                                <option value="Dogo Argentino" label="Dogo Argentino" />
                                <option value="Dogo Canario" label="Dogo Canario" />
                                <option value="Dogo de Burdeos" label="Dogo de Burdeos" />
                                <option value="Drahthaar" label="Drahthaar" />
                                <option value="English Springer Spaniel" label="English Springer Spaniel" />
                                <option value="Epagneul Breton" label="Epagneul Breton" />
                                <option value="Eurasier" label="Eurasier" />
                                <option value="Fila Brasileiro" label="Fila Brasileiro" />
                                <option value="Fox Terrier" label="Fox Terrier" />
                                <option value="Foxhound Americano" label="Foxhound Americano" />
                                <option value="Foxhound Ingles" label="" />
                                <option value="Galgo Afgano" label="" />
                                <option value="Galgo Español" label="" />
                                <option value="Galgo Italiano" label="" />
                                <option value="Galgo Ruso" label="" />
                                <option value="Gigante de los Pirineos" label="" />
                                <option value="Golden Retriever" label="" />
                                <option value="Gos d Atura" label="" />
                                <option value="Gran Danes" label="" />
                                <option value="Gran Perro Japones" label="" />
                                <option value="Husky Siberiano" label="" />
                                <option value="Irish Wolfhound" label="" />
                                <option value="Jack Russel" label="" />
                                <option value="Japanes Chin" label="" />
                                <option value="Kelpie" label="" />
                                <option value="Kerry Blue" label="" />
                                <option value="Komodor" label="" />
                                <option value="Kuvasz" label="" />
                                <option value="Labrador Retriever" label="" />
                                <option value="Laika de Siberia Occidental" label="" />
                                <option value="Laika Ruso-europeo" label="" /> */}
                                //ID=4
                                <option value="Abisinio" label="Abisinio" />
                                <option value="Ashera" label="Ashera" />
                                <option value="Australian Mist" label="Australian Mist" />
                                <option value="Azul rojo" label="Azul rojo" />
                                <option value="Balines" label="Balines" />
                                <option value="Bengala o Bengali" label="Bengala o Bengali" />
                                <option value="Birmano" label="Birmano" />
                                <option value="Bombay" label="Bombay" />
                                {/* <option value="Bosque de Noruega" label="Bosque de Noruega" />
                                <option value="Burmes" label="Burmes" />
                                <option value="Britanico de pelo corto" label="Britanico de pelo corto" />
                                <option value="Cartujo o Chartreux" label="Cartujo o Chartreux" />
                                <option value="Chausie" label="Chausie" />
                                <option value="Cornish rex" label="Cornish rex" />
                                <option value="Europeo" label="Europeo" />
                                <option value="Exotico de pelo corto" label="Exotico de pelo corto" />
                                <option value="Habana" label="Habana" /> */}
                                //ID=8
                                <option value="Carey" label="Carey" />
                                <option value="Cumberland" label="Cumberland" />
                                <option value="Laud" label="Laud" />
                                <option value="Mediterranea" label="Mediterranea" />
                                <option value="Orejas Rojas" label="Orejas Rojas" />
                                {/* <option value="Rusa" label="Rusa" />
                                <option value="Somali" label="Somali" />
                                <option value="Tierra" label="Tierra" /> */}
                              
                              </select>
                              <ErrorMessage
                                name="raza"
                                component="div"
                                className="invalid-feedback"
                              />
                            </div>
                            <div class="form-group">
                              <label>Edad <span style={{color:'red'}}>*</span></label>
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
                                <option value="1 año" label="1 año" />
                                <option value="2 años" label="2 años" />
                                <option value="3 años" label="3 años" />
                                <option value="4 años" label="4 años" />
                                <option value="5 años" label="5 años" />
                                <option value="6 años" label="6 años" />
                                <option value="7 años" label="7 años" />
                                <option value="8 años" label="8 años" />
                                <option value="9 años" label="9 años" />
                                <option value="10 años" label="10 años" />
                                <option value="11 años" label="11 años" />
                                <option value="12 años" label="12 años" />
                                <option value="13 años" label="13 años" />
                                <option value="14 años" label="14 años" />
                              </select>
                              <ErrorMessage
                                name="edad"
                                component="div"
                                className="invalid-feedback"
                              />
                            </div>

                            <div class="form-group">
                              <label>Genero <span style={{color:'red'}}>*</span></label>
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

                            <div className="form-group">
                              <button
                                type="submit"
                                className="btn btn-primary shadow-2 mb-4"
                              >
                                Guardar
                              </button>
                            </div>
                            <label><span style={{color:'red'}}>*</span> Campo Obligatorio</label>
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

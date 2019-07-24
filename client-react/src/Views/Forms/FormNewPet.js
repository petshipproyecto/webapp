import React from "react";
import {
  Row,
  Col,
  Card,
  Button,
  InputGroup,
  FormControl,
  DropdownButton,
  Dropdown
} from "react-bootstrap";

import Aux from "../../hoc/_Aux";
import avatar2 from "../../assets/images/user/avatar-6.jpg";

import { Form as FormB } from 'react-bootstrap';

//-----------Para la validacion importar estos elementos--------------
import { Formik, Field,Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
//---------------------------------------------------------------------
import avatar1 from "../../assets/images/user/avatar-6.jpg";

class FormNewPet extends React.Component {
  render() {
    return (
        <Formik
        initialValues={{
          name: "",
          raza: "",
          edad:"",
          genero: "",

        }}
        validationSchema={Yup.object().shape({
          name: Yup.string()
            .trim()
            .required("El nombre es obligatorio"),
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
        }}
        render={({ errors, status, touched }) => (
          <Form>
      
      <Aux>
        <Row className="justify-content-md-center">
            
          <Col md={8} >
            <Card>
              <Card.Header>
                <Card.Title as="h5">Agregar Nueva Mascota</Card.Title>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col md={12}>
<FormB>
<center>
                  <img
                    className="rounded-circle"
                    style={{ width: "150px" }}
                    src={avatar2}
                    alt="activity-user"
                  />
                </center>
                <FormB.Group>
                  <center>
                    {" "}
                    <Button className="mb-0">Ingresar Imagen</Button>
                  </center>
                </FormB.Group>
<FormB.Group>
                        <FormB.Label>Nombre</FormB.Label>
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
                      </FormB.Group>
                      <FormB.Group>
                        <FormB.Label>Raza</FormB.Label>
                        <Field
                          placeholder="Raza"
                          name="raza"
                          type="text"
                          className={
                            "form-control" +
                            (errors.raza && touched.raza
                              ? " is-invalid"
                              : "")
                          }
                        />
                        <ErrorMessage
                          name="raza"
                          component="div"
                          className="invalid-feedback"
                        />
                      </FormB.Group>
                      <FormB.Group>
                        <FormB.Label>Edad</FormB.Label>
                        <Field
                          placeholder="Edad"
                          name="edad"
                          type="text"
                          className={
                            "form-control" +
                            (errors.edad && touched.edad
                              ? " is-invalid"
                              : "")
                          }
                        />
                        <ErrorMessage
                          name="edad"
                          component="div"
                          className="invalid-feedback"
                        />
                      </FormB.Group>

                      <FormB.Group >
                        <FormB.Label>Genero</FormB.Label>
                        <Field
                          name="genero"
                          placeholder="Genero"
                          type="text"
                          className={
                            "form-control" +
                            (errors.genero && touched.genero ? " is-invalid" : "")
                          }
                        />
                        <ErrorMessage
                          name="genero"
                          component="div"
                          className="invalid-feedback"
                        />
                      </FormB.Group>
                    
             
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
                      </FormB>
                  </Col>
                </Row>
                
              </Card.Body>
            </Card>
          {/* <UpdatePassword>  </UpdatePassword> */}
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


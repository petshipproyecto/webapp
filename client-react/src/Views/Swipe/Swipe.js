import React from "react";
import {
  Row,
  Col,
  Card
} from "react-bootstrap";

import Aux from "../../hoc/_Aux";
import avatar2 from "../../assets/images/user/avatar-6.jpg";

import { Form as FormB } from "react-bootstrap";

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
          tipoAnimal: "",
          raza: "",
          edad: "",
          genero: "",
          file: ""
        }}
        validationSchema={Yup.object().shape({
          file: Yup.mixed().required("La imagen es obligatoria"),

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
        }}
        render={({ errors, status, touched, handleChange }) => (
          <Form>
            <Aux>
              <Row className="justify-content-md-center">
               
              </Row>
            </Aux>
          </Form>
        )}
      />
    );
  }
}

export default FormNewPet;

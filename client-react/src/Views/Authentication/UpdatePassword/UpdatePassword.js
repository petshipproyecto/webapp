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


import { Form as FormB } from 'react-bootstrap';
//-----------Para la validacion importar estos elementos--------------
import { Formik, Field,Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
//---------------------------------------------------------------------


class UpdatePassword extends React.Component {
  render() {
    return (<Formik
        initialValues={{
          password: "",
          confirmPassword:""
        }}
        validationSchema={Yup.object().shape({
            password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
             confirmPassword:  Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required')
        })}
        onSubmit={fields => {
          alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
        }}
        render={({ errors, status, touched }) => (
            <Form>
            <Card>
              <Card.Header>
                <Card.Title as="h5">Modificar Contraseña</Card.Title>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col md={12}>
                  <FormB.Group controlId="formBasicEmail">
                        <FormB.Label>Contraseña</FormB.Label>
                        <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                      </FormB.Group>
                      <FormB.Group controlId="formBasicEmail">
                        <FormB.Label>Confirmar Contraseña</FormB.Label>
                        <Field name="confirmPassword" type="password" className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
                            <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                      </FormB.Group>
                   <div className="form-group">
                        <button
                          type="submit"
                          className="btn btn-primary shadow-2 mb-4"
                        >
                          Guardar
                        </button>
                      </div>
                    <Form inline>
                      <Form.Group>
                        <Button className="mb-0">Cambiar Contraseña</Button>
                      </Form.Group>
                    </Form>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            </Form>
        )}
      />
    );
  }
}

export default UpdatePassword;

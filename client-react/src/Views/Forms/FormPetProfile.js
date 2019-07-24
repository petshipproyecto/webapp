import React from "react";
import {
  Row,
  Col,
  Card,
  Form,
  Button,
  InputGroup,
  FormControl,
  DropdownButton,
  Dropdown
} from "react-bootstrap";

import Aux from "../../hoc/_Aux";
import avatar1 from "../../assets/images/user/avatar-6.jpg";

class FormPetProfile extends React.Component {
  render() {
    return (
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
                    style={{ width: "150px" }}
                    src={avatar1}
                    alt="activity-user"
                  />
                </center>
                <Form.Group>
                  <center>
                    {" "}
                    <Button className="mb-0">Cambiar Imagen</Button>
                  </center>
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>
          <Col md={8}>
            <Card>
              <Card.Header>
                <Card.Title as="h5">Información de la mascota</Card.Title>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col md={12}>
                    <Form>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="email" placeholder="Loli" />
                        <Form.Text className="text-muted" />
                      </Form.Group>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Raza</Form.Label>
                        <Form.Control type="email" placeholder="Golden Retriever" />
                        <Form.Text className="text-muted" />
                      </Form.Group>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Edad</Form.Label>
                        <Form.Control type="email" placeholder="3 meses" />
                        <Form.Text className="text-muted" />
                      </Form.Group>
                      <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Provincia</Form.Label>
                        <Form.Control as="select">
                          <option>Chaco</option>
                          <option>Misiones</option>
                          <option>Formosa</option>
                          <option>Buenos Aires</option>
                          <option>Cordoba</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Ciudad</Form.Label>
                        <Form.Control as="select">
                          <option>Resistencia</option>
                          <option>Corrientes</option>
                          <option>Barranqueras</option>
                          <option>Saenz Peña</option>
                        </Form.Control>
                      </Form.Group>

                      <Button variant="primary">Guardar</Button>
                    </Form>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Aux>
    );
  }
}

export default FormPetProfile;

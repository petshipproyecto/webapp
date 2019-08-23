import React from "react";
import { Row, Col, Card, Table, Tabs, Tab } from "react-bootstrap";

import Aux from "../../hoc/_Aux";
import DEMO from "../../store/constant";

import avatar1 from "../../assets/images/user/avatarCat.jpg";
import avatar2 from "../../assets/images/user/avatarDog.jpg";
import avatar3 from "../../assets/images/user/avatarChinchilla.jpg";

class GaleriaMascotas extends React.Component {
  render() {
    return (
      <Aux>
        <Row>
          
        <Col md={6} xl={4}>
            <Card>
              <Card.Img variant="top" src={avatar1} />
              <Card.Body>
                <h5>Michifu</h5>
                <Card.Text>Me gustaria jugar contigo.</Card.Text>
                <div class="row m-t-30">
                  <div class="col-6 p-r-0">
                    <a
                      href="#!"
                      class="btn btn-primary text-uppercase btn-block"
                    >
                      Me Gusta
                    </a>
                  </div>
                  <div class="col-6">
                    <a
                      href="#!"
                      class="btn text-uppercase border btn-block btn-outline-secondary"
                    >
                      Eliminar
                    </a>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xl={4}>
            <Card>
              <Card.Img variant="top" src={avatar2} />
              <Card.Body>
                <h5>Michifu</h5>
                <Card.Text>Me gustaria jugar contigo.</Card.Text>
                <div class="row m-t-30">
                  <div class="col-6 p-r-0">
                    <a
                      href="#!"
                      class="btn btn-primary text-uppercase btn-block"
                    >
                      Me Gusta
                    </a>
                  </div>
                  <div class="col-6">
                    <a
                      href="#!"
                      class="btn text-uppercase border btn-block btn-outline-secondary"
                    >
                      Eliminar
                    </a>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xl={4}>
            <Card>
              <Card.Img variant="top" src={avatar3} />
              <Card.Body>
                <h5>Michifu</h5>
                <Card.Text>Me gustaria jugar contigo.</Card.Text>
                <div class="row m-t-30">
                  <div class="col-6 p-r-0">
                    <a
                      href="#!"
                      class="btn btn-primary text-uppercase btn-block"
                    >
                      Me Gusta
                    </a>
                  </div>
                  <div class="col-6">
                    <a
                      href="#!"
                      class="btn text-uppercase border btn-block btn-outline-secondary"
                    >
                      Eliminar
                    </a>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xl={4}>
            <Card>
              <Card.Img variant="top" src={avatar1} />
              <Card.Body>
                <h5>Michifu</h5>
                <Card.Text>Me gustaria jugar contigo.</Card.Text>
                <div class="row m-t-30">
                  <div class="col-6 p-r-0">
                    <a
                      href="#!"
                      class="btn btn-primary text-uppercase btn-block"
                    >
                      Me Gusta
                    </a>
                  </div>
                  <div class="col-6">
                    <a
                      href="#!"
                      class="btn text-uppercase border btn-block btn-outline-secondary"
                    >
                      Eliminar
                    </a>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xl={4}>
            <Card>
              <Card.Img variant="top" src={avatar3} />
              <Card.Body>
                <h5>Michifu</h5>
                <Card.Text>Me gustaria jugar contigo.</Card.Text>
                <div class="row m-t-30">
                  <div class="col-6 p-r-0">
                    <a
                      href="#!"
                      class="btn btn-primary text-uppercase btn-block"
                    >
                      Me Gusta
                    </a>
                  </div>
                  <div class="col-6">
                    <a
                      href="#!"
                      class="btn text-uppercase border btn-block btn-outline-secondary"
                    >
                      Eliminar
                    </a>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xl={4}>
            <Card>
              <Card.Img variant="top" src={avatar2} />
              <Card.Body>
                <h5>Michifu</h5>
                <Card.Text>Me gustaria jugar contigo.</Card.Text>
                <div class="row m-t-30">
                  <div class="col-6 p-r-0">
                    <a
                      href="#!"
                      class="btn btn-primary text-uppercase btn-block"
                    >
                      Me Gusta
                    </a>
                  </div>
                  <div class="col-6">
                    <a
                      href="#!"
                      class="btn text-uppercase border btn-block btn-outline-secondary"
                    >
                      Eliminar
                    </a>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Aux>
    );
  }
}

export default GaleriaMascotas;

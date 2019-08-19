import React from "react";

import "./../../../assets/scss/style.scss";
import "./../../../assets/scss/partials/pages/gallery.scss";
import Aux from "../../../hoc/_Aux";

import { Image, Figure, Container, Row, Col } from "react-bootstrap";

import avatar1 from "../../../assets/images/user/avatarCat.jpg";
import avatar2 from "../../../assets/images/user/avatarDog.jpg";
import avatar3 from "../../../assets/images/user/avatarTortuga.jpg";
import avatar4 from "../../../assets/images/user/avatarChinchilla.jpg";
import avatar5 from "../../../assets/images/user/avatarHamster.jpg";


class ChoosePet extends React.Component {
  render() {
    return (
      <Aux>
        <div className="auth-wrapper aut-bg-img-new">
          <div class="content">
            <Container>
              <br></br>
              <Row>
                <Col>
                  <Figure class="effect-selena">
                    <a href="/dashboard/default">
                      <Image src={avatar1} rounded width={171} height={180} />
                    </a>
                  </Figure>
                  <p>
                    <center>Michu</center>
                  </p>
                </Col>
                <Col>
                  <Figure class="effect-selena">
                    <a href="/dashboard/default">
                      <Image src={avatar2} rounded width={171} height={180} />
                    </a>
                  </Figure>
                  <p>
                    <center>Firulai</center>
                  </p>
                </Col>
                <Col>
                  <Figure class="effect-selena">
                    <a href="/dashboard/default">
                      <Image src={avatar3} rounded width={171} height={180} />
                    </a>
                  </Figure>
                  <p>
                    <center>Tortu</center>
                  </p>
                </Col>
                <Col>
                  <Figure class="effect-selena">
                    <a href="/dashboard/default">
                      <Image src={avatar4} rounded width={171} height={180} />
                    </a>
                  </Figure>
                  <p>
                    <center>Chinchi</center>
                  </p>
                </Col>
                <Col>
                  <Figure class="effect-selena">
                  <a href="/dashboard/default">
                      <Image  src={avatar5} rounded width={171} height={180} />
                    </a>
                  </Figure>
                  <p>
                    <center>Hamsty</center>
                  </p>
                </Col>

                <Col>
                  <br></br>
                  <br></br>
                  <br></br>
                  <center>
                    <a href="/NewPet">
                      <button
                        type="button"
                        class="btn-icon btn-rounded btn btn-primary "
                      >
                        <i class="feather icon-plus"></i>
                      </button>
                    </a>
                  </center>
                  <p>
                    <center>Agregar Mascota</center>
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </Aux>
    );
  }
}

export default ChoosePet;

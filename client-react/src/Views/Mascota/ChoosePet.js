import React from "react";

import "./../../assets/scss/style.scss";
import "./../../assets/scss/partials/pages/gallery.scss";
import Aux from "../../hoc/_Aux";

import { Image, Figure, Container, Row, Col } from "react-bootstrap";

import avatar1 from "../../assets/images/user/avatarCat.jpg";
import avatar2 from "../../assets/images/user/avatarDog.jpg";
import avatar3 from "../../assets/images/user/avatarTortuga.jpg";
import avatar4 from "../../assets/images/user/avatarChinchilla.jpg";
import avatar5 from "../../assets/images/user/avatarHamster.jpg";
import "../../assets/scss/partials/theme-elements/choosePet.scss";

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
                      <Image src={avatar1} className="imagen" />
                    </a>
                    <p>
                      <center>
                        <span>Michu</span>
                      </center>
                    </p>
                  </Figure>
                </Col>
                <Col>
                  <Figure class="effect-selena">
                    <a href="/dashboard/default">
                      <Image src={avatar2} className="imagen" />
                    </a>
                    <p>
                      <center>
                        <span>Lola</span>
                      </center>
                    </p>
                  </Figure>
                </Col>
                <Col>
                  <Figure class="effect-selena">
                    <a href="/dashboard/default">
                      <Image src={avatar3} className="imagen" />
                    </a>
                    <p>
                      <center>
                        <span>Firulai</span>
                      </center>
                    </p>
                  </Figure>
                </Col>
                <Col>
                  <Figure class="effect-selena">
                    <a href="/dashboard/default">
                      <Image src={avatar4} className="imagen" />
                    </a>
                    <p>
                      <center>
                        <span>Pelusa</span>
                      </center>
                    </p>
                  </Figure>
                </Col>
                <Col>
                  <Figure class="effect-selena">
                    <a href="/dashboard/default">
                      <Image src={avatar5} className="imagen" />
                    </a>
                    <p>
                      <center>
                        <span>Tortu</span>
                      </center>
                    </p>
                  </Figure>
                </Col>
                <Col className="col-centered">
                  <br />
                  <br />
                  <br />
                  <a href="/NewPet">
                    <button
                      type="button"
                      class="btn-icon btn-rounded btn btn-primary "
                    >
                      <i class="feather icon-plus"></i>
                    </button>
                  </a>
                  <p>
                    <center>Agregar Mascota</center>
                  </p>
                </Col>
              </Row>
              <br></br>
              <Row style={{ alignItems: "center" }}>
                <div class="col text-center">
                  <a href="/TablaMascotas">
                    <button
                      type="button"
                      class="btn btn-outline-primary btn-lg"
                    >
                      <i class="feather icon-settings"></i>Administrar Perfiles
                    </button>
                  </a>
                </div>
              </Row>
            </Container>
          </div>
        </div>
      </Aux>
    );
  }
}

export default ChoosePet;

import React from "react";
import { Row, Col, Card, Badge } from "react-bootstrap";

import Aux from "../../hoc/_Aux";
import DEMO from "../../store/constant";

import avatar1 from "../../assets/images/user/avatarCat.jpg";
import avatar2 from "../../assets/images/user/avatarDog.jpg";
import avatar3 from "../../assets/images/user/avatarChinchilla.jpg";
import "./../../assets/scss/partials/theme-elements/galeria.scss";

//--------Color de los iconos-------------------------
const colorEstrella = {color: "#f7bd0f"};
const colorCalendario ={color:"red"}
//----------------------------------------------------

class GaleriaMascotas extends React.Component {
  render() {
    return (
      <Aux>
        <Row>
          <Col md={6} xl={4}>
            <Card className = "cardGaleria">
              <Card.Img className="imagenGaleria" variant="top" src={avatar1} />
              <Card.Body>
                <center>
                  <h3>
                    <Badge className="badgeGaleria" pill variant="secondary">
                      Michu
                    </Badge>
                  </h3>
                </center>
                <Card.Text>
                  <p className="pGaleria">
                    <i class="fa fa-paw m-r-5"></i>
                    <b>Raza:</b> Siames
                  </p>
                  <p className="pGaleria">
                    <i
                      style={colorCalendario}
                      class="fa fa-calendar m-r-5"
                    ></i>
                    <b>Edad:</b> 2 años
                  </p>
                  <p className="pGaleria">
                    <i
                      style={colorEstrella}
                      class="fa fa-star m-r-5"
                    ></i>
                    <b>Me gusta como amigo</b>
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xl={4}>
            <Card className = "cardGaleria">
              <Card.Img className="imagenGaleria" variant="top" src={avatar3} />
              <Card.Body>
                <center>
                  <h3>
                    <Badge className="badgeGaleria" pill variant="secondary">
                      Foxi
                    </Badge>
                  </h3>
                </center>
                <Card.Text>
                  <p className="pGaleria">
                    <i class="fa fa-paw m-r-5"></i>
                    <b>Raza:</b> Chinchilla
                  </p>
                  <p className="pGaleria">
                    <i
                      style={colorCalendario}
                      class="fa fa-calendar m-r-5"
                    ></i>
                    <b>Edad:</b> 2 años
                  </p>
                  <p className="pGaleria">
                    <i
                      style={colorEstrella}
                      class="fa fa-star m-r-5"
                    ></i>
                    <b>Me gusta como pareja</b>
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xl={4}>
            <Card className = "cardGaleria">
              <Card.Img className="imagenGaleria" variant="top" src={avatar2} />
              <Card.Body>
                <center>
                  <h3>
                    <Badge className="badgeGaleria" pill variant="secondary">
                      Lola
                    </Badge>
                  </h3>
                </center>
                <Card.Text>
                  <p className="pGaleria">
                    <i class="fa fa-paw m-r-5"></i>
                    <b>Raza:</b> Pitbull
                  </p>
                  <p className="pGaleria">
                    <i
                      style={colorCalendario}
                      class="fa fa-calendar m-r-5"
                    ></i>
                    <b>Edad:</b> 2 años
                  </p>
                  <p className="pGaleria">
                    <i
                      style={colorEstrella}
                      class="fa fa-star m-r-5"
                    ></i>
                    <b>Me gusta como amigo</b>
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
         
        </Row>
      </Aux>
    );
  }
}

export default GaleriaMascotas;

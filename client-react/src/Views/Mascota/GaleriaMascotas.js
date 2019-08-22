import React from "react";
import { Row, Col, Card, Badge } from "react-bootstrap";

import Aux from "../../hoc/_Aux";
import DEMO from "../../store/constant";

import avatar1 from "../../assets/images/user/avatarCat.jpg";
import avatar2 from "../../assets/images/user/avatarDog.jpg";
import avatar3 from "../../assets/images/user/avatarChinchilla.jpg";

const styleImage = {
  
   maxHeight: 380,
  
   minHeight: 380,
  borderRadius: 20
};
const styleBadge = {
  backgroundColor: "#f47386"
};

class GaleriaMascotas extends React.Component {
  render() {
    return (
      <Aux>
        <Row>
          <Col md={6} xl={4}>
            <Card style={{ borderRadius: 20 }}>
              <Card.Img style={styleImage} variant="top" src={avatar1} />
              <Card.Body>
                <center>
                  {" "}
                  <h3>
                    <Badge style={styleBadge} pill variant="secondary">
                      Michu
                    </Badge>
                  </h3>
                </center>
                <Card.Text>
                  <p style={{ color: "black" }}>
                    <i style={{ color: "#7b3838" }} class="fa fa-paw m-r-5"></i>{" "}
                    <b>Raza:</b> Pitbull
                  </p>
                  <p style={{ color: "black" }}>
                    <i
                      style={{ color: "#de0101" }}
                      class="fa fa-calendar m-r-5"
                    ></i>{" "}
                    <b>Edad:</b> 2 años
                  </p>
                  <p style={{ color: "black" }}>
                    <i
                      style={{ color: "#f7bd0f" }}
                      class="fa fa-star m-r-5"
                    ></i>{" "}
                    <b>Me gusta como amigo</b>
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xl={4}>
            <Card  style={{ borderRadius: 20 }}>
              <Card.Img style={styleImage} variant="top" src={avatar2} />
              <Card.Body>
                <center>
                  {" "}
                  <h3>
                    <Badge style={styleBadge} pill variant="secondary">
                   Lola
                    </Badge>
                  </h3>
                </center>
                <Card.Text>
                  <p style={{ color: "black" }}>
                    <i style={{ color: "#7b3838" }} class="fa fa-paw m-r-5"></i>{" "}
                    <b>Raza:</b> Pitbull
                  </p>
                  <p style={{ color: "black" }}>
                    <i
                      style={{ color: "#de0101" }}
                      class="fa fa-calendar m-r-5"
                    ></i>{" "}
                    <b>Edad:</b> 2 años
                  </p>
                  <p style={{ color: "black" }}>
                    <i
                      style={{ color: "#f7bd0f" }}
                      class="fa fa-star m-r-5"
                    ></i>{" "}
                    <b>Me gusta como pareja</b>
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xl={4}>
            <Card style={{ borderRadius: 20 }}>
              <Card.Img style={styleImage} variant="top" src={avatar3} />
              <Card.Body>
                <center>
                  {" "}
                  <h3>
                    <Badge style={styleBadge} pill variant="secondary">
                      Pelusa
                    </Badge>
                  </h3>
                </center>
                <Card.Text>
                  <p style={{ color: "black" }}>
                    <i style={{ color: "#7b3838" }} class="fa fa-paw m-r-5"></i>{" "}
                    <b>Raza:</b> Pitbull
                  </p>
                  <p style={{ color: "black" }}>
                    <i
                      style={{ color: "#de0101" }}
                      class="fa fa-calendar m-r-5"
                    ></i>{" "}
                    <b>Edad:</b> 2 años
                  </p>
                  <p style={{ color: "black" }}>
                    <i
                      style={{ color: "#f7bd0f" }}
                      class="fa fa-star m-r-5"
                    ></i>{" "}
                    <b>Me gusta como amigo</b>
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xl={4}>
            <Card style={{ borderRadius: 20 }}>
              <Card.Img style={styleImage} variant="top" src={avatar1} />
              <Card.Body>
                <center>
                  {" "}
                  <h3>
                    <Badge style={styleBadge} pill variant="secondary">
                      Terry
                    </Badge>
                  </h3>
                </center>
                <Card.Text>
                  <p style={{ color: "black" }}>
                    <i style={{ color: "#7b3838" }} class="fa fa-paw m-r-5"></i>{" "}
                    <b>Raza:</b> Pitbull
                  </p>
                  <p style={{ color: "black" }}>
                    <i
                      style={{ color: "#de0101" }}
                      class="fa fa-calendar m-r-5"
                    ></i>{" "}
                    <b>Edad:</b> 2 años
                  </p>
                  <p style={{ color: "black" }}>
                    <i
                      style={{ color: "#f7bd0f" }}
                      class="fa fa-star m-r-5"
                    ></i>{" "}
                    <b>Me gusta como pareja</b>
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xl={4}>
            <Card style={{ borderRadius: 20 }}>
              <Card.Img style={styleImage} variant="top" src={avatar2} />
              <Card.Body>
                <center>
                  {" "}
                  <h3>
                    <Badge style={styleBadge} pill variant="secondary">
                      Firulai
                    </Badge>
                  </h3>
                </center>
                <Card.Text>
                  <p style={{ color: "black" }}>
                    <i style={{ color: "#7b3838" }} class="fa fa-paw m-r-5"></i>{" "}
                    <b>Raza:</b> Pitbull
                  </p>
                  <p style={{ color: "black" }}>
                    <i
                      style={{ color: "#de0101" }}
                      class="fa fa-calendar m-r-5"
                    ></i>{" "}
                    <b>Edad:</b> 2 años
                  </p>
                  <p style={{ color: "black" }}>
                    <i
                      style={{ color: "#f7bd0f" }}
                      class="fa fa-star m-r-5"
                    ></i>{" "}
                    <b>Me gusta como pareja</b>
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xl={4}>
            <Card style={{ borderRadius: 20 }}>
              <Card.Img style={styleImage} variant="top" src={avatar3} />
              <Card.Body>
                <center>
                  {" "}
                  <h3>
                    <Badge style={styleBadge} pill variant="secondary">
                      Foxi
                    </Badge>
                  </h3>
                </center>
                <Card.Text>
                  <p style={{ color: "black" }}>
                    <i style={{ color: "#7b3838" }} class="fa fa-paw m-r-5"></i>{" "}
                    <b>Raza:</b> Pitbull
                  </p>
                  <p style={{ color: "black" }}>
                    <i
                      style={{ color: "#de0101" }}
                      class="fa fa-calendar m-r-5"
                    ></i>{" "}
                    <b>Edad:</b> 2 años
                  </p>
                  <p style={{ color: "black" }}>
                    <i
                      style={{ color: "#f7bd0f" }}
                      class="fa fa-star m-r-5"
                    ></i>{" "}
                    <b>Me gusta como pareja</b>
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xl={4}>
            <Card style={{ borderRadius: 20 }}>
              <Card.Img style={styleImage} variant="top" src={avatar1} />
              <Card.Body>
                <center>
                  {" "}
                  <h3>
                    <Badge style={styleBadge} pill variant="secondary">
                      Michu
                    </Badge>
                  </h3>
                </center>
                <Card.Text>
                  <p style={{ color: "black" }}>
                    <i style={{ color: "#7b3838" }} class="fa fa-paw m-r-5"></i>{" "}
                    <b>Raza:</b> Pitbull
                  </p>
                  <p style={{ color: "black" }}>
                    <i
                      style={{ color: "#de0101" }}
                      class="fa fa-calendar m-r-5"
                    ></i>{" "}
                    <b>Edad:</b> 2 años
                  </p>
                  <p style={{ color: "black" }}>
                    <i
                      style={{ color: "#f7bd0f" }}
                      class="fa fa-star m-r-5"
                    ></i>{" "}
                    <b>Me gusta como pareja</b>
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

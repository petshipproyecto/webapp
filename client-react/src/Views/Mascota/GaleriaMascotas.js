import React from "react";
import { Row, Col, Card, Badge } from "react-bootstrap";

import Aux from "../../hoc/_Aux";
import DEMO from "../../store/constant";

import avatar1 from "../../assets/images/user/avatarCat.jpg";
import avatar2 from "../../assets/images/user/avatarDog.jpg";
import avatar3 from "../../assets/images/user/avatarChinchilla.jpg";

const styleImage={
  maxWidth: 378,
  maxHeight: 378,
  minWidth: 378,
  minHeight: 378,
  borderRadius: 20,
 
};
const styleBadge={
  backgroundColor:"#f47386"
};

class GaleriaMascotas extends React.Component {
  render() {
    return (
      <Aux>
        <Row>
          <Col md={6} xl={4}>
            <Card style={{ borderRadius: 20 }}>
              <Card.Img
               style={styleImage}
                variant="top"
                src={avatar1}
              />
              <Card.Body>
            <center>  <h3>
 <Badge style={styleBadge}pill variant="secondary">Michu</Badge>
  </h3></center>
                <Card.Text>
                <p><i class="fa fa-paw m-r-5"></i> Raza: Pitbull</p>
                <p><i class="fa fa-calendar m-r-5"></i> Edad: 2 años</p>
                <p><i class="fa fa-star m-r-5"></i> Me gusta como pareja</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xl={4}>
            <Card style={{ borderRadius: 20 }}>
              <Card.Img
                style={styleImage}
                variant="top"
                src={avatar2}
              />
              <Card.Body>
            <center><h5><dt>Michifu</dt></h5></center>
                <Card.Text>
              <p><i class="fa fa-info m-r-5"></i> Nombre: Lola</p>
                <p><i class="fa fa-paw m-r-5"></i> Raza: Pitbull</p>
                <p><i class="fa fa-calendar m-r-5"></i> Edad: 2 años</p>
                <p><i class="fa fa-star m-r-5"></i> Me gusta como pareja</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xl={4}>
            <Card style={{ borderRadius: 20 }}>
              <Card.Img
               style={styleImage}
                variant="top"
                src={avatar1}
              />
              <Card.Body>
            <center><h5><dt>Michifu</dt></h5></center>
                <Card.Text>
              <p><i class="fa fa-info m-r-5"></i> Nombre: Lola</p>
                <p><i class="fa fa-paw m-r-5"></i> Raza: Pitbull</p>
                <p><i class="fa fa-calendar m-r-5"></i> Edad: 2 años</p>
                <p><i class="fa fa-star m-r-5"></i> Me gusta como pareja</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xl={4}>
            <Card style={{ borderRadius: 20 }}>
              <Card.Img
               style={styleImage}
                variant="top"
                src={avatar3}
              />
              <Card.Body>
            <center><h5><dt>Michifu</dt></h5></center>
                <Card.Text>
              <p><i class="fa fa-info m-r-5"></i> Nombre: Lola</p>
                <p><i class="fa fa-paw m-r-5"></i> Raza: Pitbull</p>
                <p><i class="fa fa-calendar m-r-5"></i> Edad: 2 años</p>
                <p><i class="fa fa-star m-r-5"></i> Me gusta como pareja</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xl={4}>
            <Card style={{ borderRadius: 20 }}>
              <Card.Img
               style={styleImage}
                variant="top"
                src={avatar2}
              />
              <Card.Body>
            <center><h5><dt>Michifu</dt></h5></center>
                <Card.Text>
              <p><i class="fa fa-info m-r-5"></i> Nombre: Lola</p>
                <p><i class="fa fa-paw m-r-5"></i> Raza: Pitbull</p>
                <p><i class="fa fa-calendar m-r-5"></i> Edad: 2 años</p>
                <p><i class="fa fa-star m-r-5"></i> Me gusta como pareja</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xl={4}>
            <Card style={{ borderRadius: 20 }}>
              <Card.Img
                style={styleImage}
                variant="top"
                src={avatar3}
              />
              <Card.Body>
            <center><h5><dt>Michifu</dt></h5></center>
                <Card.Text>
              <p><i class="fa fa-info m-r-5"></i> Nombre: Lola</p>
                <p><i class="fa fa-paw m-r-5"></i> Raza: Pitbull</p>
                <p><i class="fa fa-calendar m-r-5"></i> Edad: 2 años</p>
                <p><i class="fa fa-star m-r-5"></i> Me gusta como pareja</p>
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

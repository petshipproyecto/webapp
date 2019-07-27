import React from "react";
import { NavLink } from "react-router-dom";

import "./../../../assets/scss/style.scss";
import "./../../../assets/scss/partials/pages/gallery.scss";

import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";
import { Image, Figure, Container, Row, Col } from "react-bootstrap";

//-----------Para la validacion importar estos elementos--------------
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
//---------------------------------------------------------------------
import avatar1 from "../../../assets/images/user/avatarCat.jpg";
import avatar2 from "../../../assets/images/user/avatarDog.jpg";
import avatar3 from "../../../assets/images/user/avatarTortuga.jpg";
import avatar4 from "../../../assets/images/user/avatarChinchilla.jpg";
import avatar5 from "../../../assets/images/user/avatarHamster.jpg";

import FigureImage from "react-bootstrap/FigureImage";
import FigureCaption from "react-bootstrap/FigureCaption";

class ChoosePet extends React.Component {
  render() {
    return (
      <Aux>
        <div className="auth-wrapper aut-bg-img">
          <div class="content">
            <Container>
              <Row>
                <Col>
                  <Figure class="effect-selena">
                    <a href="/dashboard/default">
                      <Image src={avatar1} rounded width={171} height={180} />
                    </a>
                  </Figure>
                </Col>
                <Col>
                  <Figure class="effect-selena">
                    <a href="/dashboard/default">
                      <Image src={avatar2} rounded width={171} height={180} />
                    </a>
                  </Figure>
                </Col>
                <Col>
                  <Figure class="effect-selena">
                    <a href="/dashboard/default">
                      <Image src={avatar3} rounded width={171} height={180} />
                    </a>
                  </Figure>
                </Col>
                <Col>
                  <Figure class="effect-selena">
                    <a href="/dashboard/default">
                      <Image src={avatar4} rounded width={171} height={180} />
                    </a>
                  </Figure>
                </Col>
                <Col>
                  <Figure class="effect-selena">
                    <a href="/auth/signup">
                      <Image src={avatar5} rounded width={171} height={180} />
                    </a>
                  </Figure>
                  <a href="/auth/signup"></a>
                </Col>

                <Col>
                  <br></br>
                  <br></br>
                  <br></br>
                  <a href="/forms/NewPet">
                    <button
                      type="button"
                      class="btn-icon btn-rounded btn btn-primary "
                    >
                      <i class="feather icon-plus"></i>
                    </button>
                  </a>
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

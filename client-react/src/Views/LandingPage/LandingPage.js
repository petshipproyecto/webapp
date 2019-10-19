import React from "react";

import { Navbar, Nav, FormControl, Button } from "react-bootstrap";

import { NavLink } from "react-router-dom";
import { signUp } from "../../store/actions/user";
// react redux firebase auth - https://github.com/the-road-to-react-with-firebase/react-redux-firebase-authentication
import "./../../assets/scss/style.scss";
import Aux from "../../hoc/_Aux";
import Breadcrumb from "../../App/layout/AdminLayout/Breadcrumb";
//import DEMO from "../../../store/constant";
import axios from "axios";
import { connect } from "react-redux";
import { requestSignIn, signedIn } from "../../store/actions/user";
import { auth } from "../../store/firebase";
import { withRouter } from "react-router-dom";
import "./../../assets/scss/partials/theme-elements/landingPage.scss";

//-----------Para la validacion importar estos elementos--------------
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
//---------------------------------------------------------------------
import { SocialIcon } from "react-social-icons";

// Sweet Alert para los mensajes de exito y error
import swal from "sweetalert";

class LandingPage extends React.Component {
  render() {
    return (
      <Aux>
        <Navbar
          class="navbar navbar-expand-lg navbar-light navbar-default navbar-fixed-top past-main"
          bg="light"
          variant="light"
        >
          <Navbar.Brand style={{ background: "#f8f9fa" }} href="#home">
            <i style={{ color: "#f47386" }} class="fa fa-heart"></i>Petship
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">Acerca de</Nav.Link>
            <Nav.Link href="#pricing">Desarrolladores</Nav.Link>
          </Nav>
          <Form inline>
            <Button className="btn btn-primary">Iniciar Sesión</Button>
          </Form>
        </Navbar>
        <div class="container">
          .wrapper .heart.x1 .heart.x2 .heart.x3 .heart.x4 .heart.x5
          .altheart.x6
          <div class="row">
            <div class="col-lg-12">
              <div id="content">
                <h1>Petship!!!</h1>
                <h3>Queres encontrar una pareja o un amigo para tu mascota</h3>
                <hr />
                <button class="btn btn-lg btn-primary shadow-2 mb-4">
                  <i class="fa fa-paw"></i>Registrate
                </button>
              </div>
            </div>
          </div>
        </div>
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: userData => dispatch(signUp(userData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage);

import React from "react";
import { Navbar, Nav, Button, Form } from "react-bootstrap";
import "./../../assets/scss/style.scss";
import Aux from "../../hoc/_Aux";
import { connect } from "react-redux";
import "./../../assets/scss/partials/theme-elements/landingPage.scss";
import logoP from "./../../assets/images/logoP.png";
import nombreP from "./../../assets/images/nombreP.png";

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
            <i style={{ color: "#f47386" }} class="fa fa-heart"></i>&nbsp;
            Petship
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home"></Nav.Link>
            <Nav.Link href="#section1"></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
          </Nav>
          <Form inline>
            <Button
              onClick={() => {
                this.props.history.replace("/signIn");
              }}
              className="btn btn-primary"
            >
              Iniciar Sesión
            </Button>
          </Form>
        </Navbar>
        <div class="wrapper">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div style={{ paddingTop: 80 }} id="content">
                  <h3>
                    <img style={{ height: 200 }} src={logoP} />
                  </h3>
                  <img style={{ height: 100 }} src={nombreP} />
                  <h3>
                    Querés encontrar una pareja o un amigo para tu mascota?
                  </h3>
                  <hr />
                  <button
                    onClick={() => {
                      this.props.history.replace("/signUp");
                    }}
                    class="btn btn-lg btn-primary shadow-2 mb-4"
                  >
                    <i class="fa fa-paw"></i>Registrate
                  </button>
                </div>
              </div>
            </div>
            <div class="heart x1"></div>
            <div class="heart x2"></div>
            <div class="heart x3"></div>
            <div class="heart x4"></div>
            <div class="heart x5"> </div>
            <div class="altheart x6"></div>
          </div>
        </div>
      </Aux>
    );
  }
}

export default connect()(LandingPage);

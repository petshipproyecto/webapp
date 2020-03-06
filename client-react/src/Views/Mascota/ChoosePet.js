import React from "react";

import "./../../assets/scss/style.scss";
import "./../../assets/scss/partials/pages/gallery.scss";
import Aux from "../../hoc/_Aux";
import { connect } from "react-redux";
import { Image, Figure, Container, Row, Col } from "react-bootstrap";
import axios from "axios";

import swal from "sweetalert";
import "../../assets/scss/partials/theme-elements/choosePet.scss";
import Loader from "react-loader-spinner";
import { Route, Redirect } from "react-router-dom";
import config from "../../config";

const rutaApi = config.rutaApi;

class ChoosePet extends React.Component {
  state = {
    perfiles: [],
    loading: true,
    cantidadDePerfiles: 0
  };

  componentDidMount() {
    axios
      .get(rutaApi + "usuario/" + this.props.userId)
      .then(response => {
        this.setState({ perfiles: response.data.Perfils, loading: false });
        console.log("loader" + this.state);
        this.setState({ cantidadDePerfiles: response.data.Perfils.length });
      })
      .catch(e => {
        this.setState({ perfiles: [], loading: false });
      });
  }

  render() {
    const setTargetProfile = perfil => {
      //console.log(perfil);

      axios
        .put(rutaApi + "usuario/" + this.props.userId, {
          Id_perfil_activo: perfil
        })
        .then(response => {
          window.location.replace("/PetProfile");
          //console.log(response);
        })
        .catch(e => {});
    };
    return (
      <Aux>
        <div className="auth-wrapper aut-bg-img-new">
          <div class="content">
            <Container>
              <center>
                <Loader
                  type="Hearts"
                  color="#f47386"
                  height={190}
                  width={190}
                  timeout={3000} //3 secs
                />
              </center>
              <Row>
                {this.state.perfiles.map(element => {
                  return (
                    <Col>
                      <Figure class="effect-selena">
                        <a
                          href="#"
                          onClick={function() {
                            setTargetProfile(element.Id_perfil);
                          }}
                        >
                          <Image
                            src={element.Imagen}
                            className="imagen"
                            id={element.Id_perfil}
                          />
                        </a>
                        <p>
                          <center>
                            <span> {element.Nombre}</span>
                          </center>
                        </p>
                      </Figure>
                    </Col>
                  );
                })}
                <Col className="col-centered">
                  <br />
                  <br />
                  <br />
                  <a
                    onClick={() => {
                      if (this.state.cantidadDePerfiles > 4) {
                        swal({
                          title: "Error",
                          text: "Limite de Perfiles excedido",
                          icon: "error",
                          timer: 3000,
                          button: false
                        });
                      } else {
                        window.location.replace("/NewPet");
                      }
                    }}
                  >
                    <button
                      type="button"
                      class="btn-icon btn-rounded btn btn-primary  "
                    >
                      <i class="feather icon-plus"></i>
                    </button>
                    <center>Agregar Mascota</center>
                  </a>
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
                      <i class="feather icon-settings"></i>Administrar Mascotas
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

const mapStateToProps = state => {
  // console.log("pet profile" + JSON.stringify(state.firebase.auth.uid))
  return {
    userId: state.firebase.auth.uid,
    authError: state.auth.authError
  };
};
const mapDispatchToProps = dispatch => {};

export default connect(mapStateToProps, mapDispatchToProps)(ChoosePet);

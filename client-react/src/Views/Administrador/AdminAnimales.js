import React from "react";
import {
  Row,
  Col,
  Card,
  Table,
  OverlayTrigger,
  Tooltip
} from "react-bootstrap";
import axios from "axios";
import Aux from "../../hoc/_Aux";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import Img_mascota_anonima from "../../assets/images/user/mascota_anonima.png";
import config from "../../config";
import userProfile1 from "../../assets/images/user/avatar1.jpg";
import userProfile2 from "../../assets/images/user/avatar2.jpg";

const rutaApi = config.rutaApi;

const setTargetProfile = (Usr_cod, Id_perfil) => {
  axios
    .put(rutaApi + "usuario/" + Usr_cod, {
      Id_perfil_activo: Id_perfil
    })
    .then(response => {
      window.location.replace("/PetProfile");
    })
    .catch(e => {});
};

const deleteProfile = (Usr_cod, perfil) => {
  Swal.fire({
    title: "Eliminar a " + perfil.Nombre,
    text: "¿Está seguro de que lo desea eliminar?",
    type: "question",
    showCancelButton: true,
    confirmButtonColor: "#8BC3FF",
    cancelButtonColor: "#BFBFBF ",
    cancelButtonText: "Cancelar",
    confirmButtonText: "OK"
  }).then(result => {
    if (result.value) {
      axios
        .delete(rutaApi + "perfil/" + perfil.Id_perfil)
        .then(response => {
          axios.put(rutaApi + "usuario/" + Usr_cod, {
            Id_perfil_activo: perfil.Id_perfil
          });
        })
        .then(result => {
          window.location.replace("/choosePet");
        })
        .catch(e => {
          Swal.fire(
            "Error",
            "Se ha producido un error al intentar eliminar la mascota",
            "error"
          );
        });
    }
  });
};

class AdminAnimales extends React.Component {
  state = {
    Usr_cod: null,
    perfiles: [],
    razas: {},
    raza: ""
  };

  componentDidMount() {
    axios.get(rutaApi + "usuario/" + this.props.userId).then(response => {
      this.setState({
        Usr_cod: response.data.Usr_cod,
        perfiles: response.data.Perfils
      });
      console.log("state 1" + JSON.stringify(this.state));
    });

    axios.get(rutaApi + "raza").then(response => {
      let razas = {};
      console.log(response.data);

      for (var i = 0; i < response.data.length; i++) {
        razas[response.data[i].Id_raza] = response.data[i];
      }

      console.log(razas["1"]);
      this.setState({
        raza: razas,
        test: "hola"
      });
      console.log("state " + i + JSON.stringify(this.state));
    });
  }

  render() {
    return (
      <Aux>
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <Card.Title as="h5">
                  Administrar Animales de Juan Perez
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th>Mascota</th>
                      <th>Nombre</th>
                      <th>Tipo de Mascota</th>
                      <th>Raza</th>
                      <th>Edad</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <h6 class="m-0">
                          <img
                            className="media-object img-radius"
                            src={userProfile1}
                            alt="Generic placeholder"
                          />
                        </h6>
                      </td>
                      <td>Juan</td>
                      <td>Perez</td>
                      <td>Resistencia-Chaco</td>
                      <td>juanPerez@gmail.com</td>
                      <td>
                        <a class="Edit" href="/ConfiguracionBusqueda">
                          <OverlayTrigger
                            placement="left"
                            delay={{ show: 250, hide: 400 }}
                            overlay={<Tooltip>Mascotas</Tooltip>}
                          >
                            <i
                              style={{ fontSize: 24, color: "#f47386" }}
                              className="fa fa-paw"
                            />
                          </OverlayTrigger>
                        </a>
                        &nbsp;
                        <a class="Edit" href="/ConfiguracionBusqueda">
                          <OverlayTrigger
                            placement="left"
                            delay={{ show: 250, hide: 400 }}
                            overlay={<Tooltip>Editar</Tooltip>}
                          >
                            <i
                              style={{ fontSize: 24, color: "#f47386" }}
                              className="icon feather icon-edit-2"
                            />
                          </OverlayTrigger>
                        </a>
                        <a class="Edit" href="/ConfiguracionBusqueda">
                          <OverlayTrigger
                            placement="left"
                            delay={{ show: 250, hide: 400 }}
                            overlay={<Tooltip>Eliminar</Tooltip>}
                          >
                            <i
                              style={{ fontSize: 24, color: "#f47386" }}
                              className="icon feather icon-trash-2"
                            />
                          </OverlayTrigger>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6 class="m-0">
                          <img
                            className="media-object img-radius"
                            src={userProfile2}
                            alt="Generic placeholder"
                          />
                        </h6>
                      </td>
                      <td>Carlos</td>
                      <td>Gomez</td>
                      <td>Resistencia-Chaco</td>
                      <td>carlosGomez@gmail.com</td>
                      <td>
                        <a class="Edit" href="/ConfiguracionBusqueda">
                          <OverlayTrigger
                            placement="left"
                            delay={{ show: 250, hide: 400 }}
                            overlay={<Tooltip>Mascotas</Tooltip>}
                          >
                            <i
                              style={{ fontSize: 24, color: "#f47386" }}
                              className="fa fa-paw"
                            />
                          </OverlayTrigger>
                        </a>
                        &nbsp;
                        <a class="Edit" href="/ConfiguracionBusqueda">
                          <OverlayTrigger
                            placement="left"
                            delay={{ show: 250, hide: 400 }}
                            overlay={<Tooltip>Editar</Tooltip>}
                          >
                            <i
                              style={{ fontSize: 24, color: "#f47386" }}
                              className="icon feather icon-edit-2"
                            />
                          </OverlayTrigger>
                        </a>
                        <a class="Edit" href="/ConfiguracionBusqueda">
                          <OverlayTrigger
                            placement="left"
                            delay={{ show: 250, hide: 400 }}
                            overlay={<Tooltip>Eliminar</Tooltip>}
                          >
                            <i
                              style={{ fontSize: 24, color: "#f47386" }}
                              className="icon feather icon-trash-2"
                            />
                          </OverlayTrigger>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  //console.log("user profile" + JSON.stringify(state.firebase.auth.uid))
  return {
    userId: state.firebase.auth.uid,
    authError: state.auth.authError
  };
};

export default connect(mapStateToProps)(AdminAnimales);

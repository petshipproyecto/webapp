import React from "react";
import { Row, Col, Card, Table } from "react-bootstrap";
import axios from "axios";
import Aux from "../../hoc/_Aux";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import Img_mascota_anonima from "../../assets/images/user/mascota_anonima.png";
import config from "../../config";

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

class TablaMascotas extends React.Component {
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
                <Card.Title as="h5">Administrar Mascotas</Card.Title>
              </Card.Header>
              <Card.Body>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th>Mascota</th>
                      <th>Nombre</th>
                      <th>Tipo de Animal</th>
                      <th>Raza</th>
                      <th>Genero</th>
                      <th>Edad</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.perfiles.map(element => {
                      var userid = this.props.userId;
                      return (
                        <tr>
                          <td>
                            <h6 class="m-0">
                              <img
                                className="media-object img-radius"
                                src={element.Imagen || Img_mascota_anonima}
                                alt="Generic placeholder"
                              />
                            </h6>
                          </td>
                          <td>{element.Nombre}</td>
                          <td>{element.Raza.Animal.Descripcion}</td>
                          <td>{element.Raza.Descripcion}</td>
                          <td>{element.Genero.Descripcion}</td>
                          <td>{element.Edad + " "} años</td>
                          <td>
                            <a
                              class="text-white label theme-bg2 f-12"
                              style={{ cursor: "pointer" }}
                              onClick={function() {
                                setTargetProfile(userid, element.Id_perfil);
                              }}
                            >
                              Editar
                            </a>
                            <a
                              class="text-white label theme-bg f-12"
                              style={{ cursor: "pointer" }}
                              onClick={function() {
                                deleteProfile(userid, element);
                              }}
                            >
                              Eliminar
                            </a>
                          </td>
                        </tr>
                      );
                    })}
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

export default connect(mapStateToProps)(TablaMascotas);

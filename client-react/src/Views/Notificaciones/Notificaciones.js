import React from "react";
import { Row, Col, Card, Table, Button, Badge } from "react-bootstrap";
import Aux from "../../hoc/_Aux";

import { connect } from "react-redux";
//-----------------Libreria para tabla de notificaciones - Libreria:react-boostrap-table-2-------------
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

import firebase from "../../configs/fbConfigs";
//-----------------Libreria para tabla de notificaciones-------------

//-----------------Libreria del popup o modal------------------------
import Dialog from "react-bootstrap-dialog";
//-----------------Libreria del popup o modal------------------------

//--------------Avatares---------------------------------------------
import Avatar1 from "../../assets/images/user/mascota_anonima.png";
import Avatar2 from "../../assets/images/user/usuario_anonimo.png";

//--------------Avatares---------------------------------------------

//-----------Estilo de animacion para las notificaciones--------------
import "../../assets/scss/partials/theme-elements/animacion.scss";
import axios from "axios";
import config from "../../config";

var rutaApi = config.rutaApi;

//---Estilo de las imagenes--
const imagen = {
  minWidth: 110,
  maxHeight: 110,
  minHeight: 110,
  maxWidth: 110
};

//--------Color de los iconos-------------------------
const colorEstrella = { color: "#f47386" };
const colorCalendario = { color: "#f47386" };
//---------------------------------------------

//Constantes para la busqueda y el boton de borrar busqueda
const { SearchBar, ClearSearchButton } = Search;

//Default para el sort de las columnas
const defaultSorted = [
  {
    dataField: "nombre",
    order: "desc"
  }
];

//-------------Columnas de la tabla-------------------------
const columns = [
  {
    dataField: "fotoMascota",
    text: "Mascota"
  },
  {
    dataField: "nombre",
    text: "Nombre",
    sort: true,
    sortCaret: (order, column) => {
      if (!order) return <span>&nbsp;&nbsp;Desc/Asc</span>;
      else if (order === "asc")
        return (
          <span style={{ cursor: "pointer" }}>
            &nbsp;&nbsp;Desc/<font color="#f47386">Asc</font>
          </span>
        );
      else if (order === "desc")
        return (
          <span style={{ cursor: "pointer" }}>
            &nbsp;&nbsp;<font color="#f47386">Desc</font>/Asc
          </span>
        );
      return null;
    }
  },
  {
    dataField: "fotoDueño",
    text: "Dueño"
  },
  {
    dataField: "nombreDueño",
    text: "Nombre",
    sort: true,
    sortCaret: (order, column) => {
      if (!order) return <span>&nbsp;&nbsp;Desc/Asc</span>;
      else if (order === "asc")
        return (
          <span style={{ cursor: "pointer" }}>
            &nbsp;&nbsp;Desc/<font color="#f47386">Asc</font>
          </span>
        );
      else if (order === "desc")
        return (
          <span style={{ cursor: "pointer" }}>
            &nbsp;&nbsp;<font color="#f47386">Desc</font>/Asc
          </span>
        );
      return null;
    }
  },
  {
    dataField: "fecha",
    text: "Fecha",
    sort: true,
    sortCaret: (order, column) => {
      if (!order) return <span>&nbsp;&nbsp;Desc/Asc</span>;
      else if (order === "asc")
        return (
          <span style={{ cursor: "pointer" }}>
            &nbsp;&nbsp;Desc/<font color="#f47386">Asc</font>
          </span>
        );
      else if (order === "desc")
        return (
          <span style={{ cursor: "pointer" }}>
            &nbsp;&nbsp;<font color="#f47386">Desc</font>/Asc
          </span>
        );
      return null;
    }
  },
  {
    dataField: "acciones",
    text: "Acciones"
  }
];
//-------------Columnas de la tabla-------------------------

class Notificaciones extends React.Component {
  constructor() {
    super();
    this.onPareja = this.onPareja.bind(this);
    this.onAmistad = this.onAmistad.bind(this);
    //----------------------Datos de las notificaciones---------------------
    this.notificaciones = [
      {
        fotoMascota: (
          <h6 class="m-0">
            <img
              className="media-object img-radius"
              src={Avatar1}
              alt="Generic placeholder"
            />
          </h6>
        ),
        nombre: "Lola",
        fotoDueño: (
          <h6 class="m-0">
            <img
              className="media-object img-radius"
              src={Avatar2}
              alt="Generic placeholder"
            />
          </h6>
        ),
        nombreDueño: "Carlos Perez",
        fecha: "10/05/2019",
        hora: "20:05 AM",
        acciones: (
          <div>
            {/* Boton de ver informacion */}
            <a
              style={{ cursor: "pointer" }}
              class="text-white label theme-bg2 f-12"
              onClick={this.onPareja}
            >
              Ver Información
            </a>
            <Dialog
              ref={component => {
                this.dialog = component;
              }}
            />
            {/* Boton de ver informacion */}
          </div>
        )
      },
      {
        fotoMascota: (
          <h6 class="m-0">
            <img
              className="media-object img-radius"
              src={Avatar1}
              alt="Generic placeholder"
            />
          </h6>
        ),
        nombre: "Lola",
        fotoDueño: (
          <h6 class="m-0">
            <img
              className="media-object img-radius"
              src={Avatar2}
              alt="Generic placeholder"
            />
          </h6>
        ),
        nombreDueño: "Carlos Perez",
        fecha: "10/05/2019",
        hora: "20:05 AM",
        acciones: (
          <div>
            {/* Boton de ver informacion */}
            <a
              style={{ cursor: "pointer" }}
              class="text-white label theme-bg2 f-12"
              onClick={this.onAmistad}
            >
              Ver Información
            </a>
            <Dialog
              ref={component => {
                this.dialog = component;
              }}
            />
            {/* Boton de ver informacion */}
          </div>
        )
      }
    ];
    //----------------------Datos de las notificaciones---------------------
  }

  mostrarPerfil(thiss, infoPerfil) {
    var user = firebase.auth().currentUser;
    if (user) {
      console.log(user.email);
      // User is signed in.
    }
    thiss.dialog.show({
      body: (
        <div>
          <Card
            className="cardGaleria"
            style={{
              maxHeight: 530,
              minHeight: 530
            }}
          >
            <Card.Img
              style={{
                maxHeight: 200,
                minHeight: 200
              }}
              className="imagenGaleria"
              variant="top"
              src={infoPerfil.Imagen}
            />
            <Card.Body
              style={{
                maxHeight: 320,
                minHeight: 320
              }}
            >
              <center>
                <h3>
                  <Badge
                    style={{ backgroundColor: "#f47386" }}
                    className="badgeGaleria"
                    pill
                    variant="secondary"
                  >
                    {infoPerfil.Nombre}
                  </Badge>
                </h3>
              </center>
              <br />
              <Card.Text>
                <p style={{ fontSize: "16px" }} className="pGaleria">
                  <i style={{ color: "#f47386" }} class="fa fa-paw m-r-5"></i>
                  <b>Raza:</b> {infoPerfil.Raza.Descripcion}
                </p>
                <p style={{ fontSize: "16px" }} className="pGaleria">
                  <i style={colorCalendario} class="fa fa-calendar m-r-5"></i>
                  <b>Edad:</b> {infoPerfil.Edad} años
                </p>
                <p style={{ fontSize: "16px" }} className="pGaleria">
                  <i style={colorEstrella} class="fa fa-star m-r-5"></i>
                  <b>
                    {infoPerfil.Interes_pareja
                      ? "Le gustas como Pareja"
                      : "Le gustas como Amigo"}
                  </b>
                </p>

                <p>
                  <p
                    style={{ color: "black", fontSize: "17px" }}
                    className="pGaleria"
                  >
                    Información de Contacto
                  </p>

                  <p style={{ fontSize: "16px" }} className="pGaleria">
                    <i style={colorEstrella} class="fa fa-user"></i>
                    <b> Nombre:</b> {infoPerfil.Usuario.Nombre}{" "}
                    {infoPerfil.Usuario.Apellido}
                  </p>
                  <p style={{ fontSize: "16px" }} className="pGaleria">
                    <i style={colorEstrella} class="fa fa-envelope "></i>
                    <b>Email:</b>
                    {infoPerfil.Usuario.Email}
                  </p>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      ),
      actions: [Dialog.OKAction()],
      bsSize: "small",
      onHide: dialog => {
        dialog.hide();
        console.log("closed by clicking background.");
      }
    });
  }
  //--------------------Mensaje para match de pareja-------------------------
  //--------------------Mensaje para match de amistad-------------------------
  onAmistad(info, targetProfile) {
    this.dialog.show({
      body: (
        <div className="modal-container">
          <center>
            <p style={{ fontSize: 40 }}>Hay Amistad!!!</p>
          </center>
          <div class="d-flex justify-content-between">
            <div>
              <img
                style={imagen}
                className="img-radio"
                src={info.Match.Perfil_origen.Imagen}
                alt="activity-user"
              />
              <br />
              <center>
                <p style={{ fontSize: 20 }}>
                  {info.Match.Perfil_origen.Nombre}
                </p>
              </center>
            </div>
            <div>
              <i
                style={{ fontSize: 70, color: "#f47386" }}
                class="fa fa-soccer-ball-o bounce"
              ></i>
            </div>
            <div>
              <img
                style={imagen}
                className="img-radio"
                src={info.Match.Perfil_destino.Imagen}
                alt="activity-user"
              />
              <br />
              <center>
                <p style={{ fontSize: 20 }}>
                  {info.Match.Perfil_destino.Nombre}
                </p>
              </center>
            </div>
          </div>

          <div class="row">
            <div class="col text-center">
              {/* Boton ver perfil de la mascota que hizo match */}

              <button
                type="button"
                class="btn btn-outline-primary btn-lg"
                onClick={() => this.mostrarPerfil(this, targetProfile)}
              >
                <i class="feather icon-user"></i>
                &nbsp;&nbsp;Ver&nbsp;&nbsp;Perfil&nbsp;&nbsp;
              </button>

              {/* Boton enviar email */}
            </div>
          </div>
        </div>
      ),
      actions: [Dialog.CancelAction(), Dialog.OKAction()],
      bsSize: "small",
      onHide: dialog => {
        dialog.hide();
        console.log("closed by clicking background.");
      }
    });
  }
  //--------------------/Mensaje para match de amistad-------------------------

  //--------------------Mensaje para match de pareja-------------------------
  onPareja(info, targetProfile) {
    this.dialog.show({
      body: (
        <div className="modal-container">
          <center>
            <p style={{ fontSize: 50 }}>Hay Cita !!! </p>
          </center>
          <div class="d-flex justify-content-between">
            <div>
              <img
                style={imagen}
                className="img-radio"
                src={info.Match.Perfil_origen.Imagen}
                alt="activity-user"
              />
              <br />
              <center>
                <p style={{ fontSize: 20 }}>
                  {info.Match.Perfil_origen.Nombre}
                </p>
              </center>
            </div>
            <div>
              <p class="heart">
                <i class="fa fa-heart fa-4x fa-beat"></i>
              </p>
            </div>
            <div>
              <img
                style={imagen}
                className="img-radio"
                src={info.Match.Perfil_destino.Imagen}
                alt="activity-user"
              />
              <br />
              <center>
                <p style={{ fontSize: 20 }}>
                  {info.Match.Perfil_destino.Nombre}
                </p>
              </center>
            </div>
          </div>
          <div class="row"></div>
          <div class="row">
            <div class="col text-center">
              {/* Boton ver perfil de la mascota que hizo match */}

              <button
                type="button"
                class="btn btn-outline-primary btn-lg"
                onClick={() => this.mostrarPerfil(this, targetProfile)}
              >
                <i class="feather icon-user"></i>
                &nbsp;&nbsp;Ver&nbsp;&nbsp;Perfil&nbsp;&nbsp;
              </button>

              {/* Boton ver perfil de la mascota que hizo match */}
            </div>
          </div>
        </div>
      ),
      actions: [Dialog.CancelAction(), Dialog.OKAction()],
      bsSize: "small",
      onHide: dialog => {
        dialog.hide();
        console.log("closed by clicking background.");
      }
    });
  }

  buildNotificacionRecord(notificacionData) {
    const targetProfile =
      notificacionData.Id_perfil !== notificacionData.Match.Id_perfil_destino
        ? notificacionData.Match.Perfil_destino
        : notificacionData.Match.Perfil_origen;
    const matchPareja = notificacionData.Match.Id_tipo_match === "2";
    return {
      fotoMascota: (
        <h6 class="m-0">
          <img
            className="media-object img-radius"
            src={targetProfile.Imagen || ""}
            alt="Generic placeholder"
          />
        </h6>
      ),
      nombre: targetProfile.Nombre,
      fotoDueño: (
        <h6 class="m-0">
          <img
            className="media-object img-radius"
            src={targetProfile.Usuario.Imagen || Avatar2}
            alt="Generic placeholder"
          />
        </h6>
      ),
      nombreDueño:
        targetProfile.Usuario.Nombre + " " + targetProfile.Usuario.Apellido,
      fecha: notificacionData.createdAt.substr(0, 10),
      acciones: (
        <div>
          {/* Boton de ver informacion */}
          <a
            style={{ cursor: "pointer" }}
            class="text-white label theme-bg2 f-12"
            onClick={
              matchPareja
                ? () => {
                    this.onPareja(notificacionData, targetProfile);
                  }
                : () => {
                    this.onAmistad(notificacionData, targetProfile);
                  }
            }
          >
            Ver Información
          </a>
          <Dialog
            ref={component => {
              this.dialog = component;
            }}
          />
          {/* Boton de ver informacion */}
        </div>
      )
    };
  }
  state = {
    notificaciones: []
  };

  componentDidMount() {
    axios
      .get(rutaApi + "usuario/" + this.props.userId)
      .then(response => {
        this.setState({
          perfiles: response.data.Perfils,
          loading: false,
          usuario: response.data,
          imagen: response.data.Imagen,
          idPerfilActivo: response.data.Id_perfil_activo
        });
        axios
          .get(rutaApi + "perfil/" + response.data.Id_perfil_activo)
          .then(response => {
            this.setState({
              perfil_activo: response.data
            });
            //response.data.Id_perfil
            console.log(JSON.stringify(this.state));

            axios
              .get(rutaApi + "notificaciones/" + response.data.Id_perfil)
              .then(notificaciones => {
                const notis = [];
                let auxNofic = {};
                notificaciones.data.forEach(notificacion => {
                  auxNofic = this.buildNotificacionRecord(notificacion);
                  notis.push(auxNofic);
                });
                console.log(JSON.stringify(auxNofic));
                //this.notificaciones = notis;

                this.setState({ notificaciones: notis });
              });
          });
      })
      .catch(e => {});
  }

  render() {
    return (
      <Aux>
        <Row>
          <Col>
            <Card className="Recent-Users">
              <Card.Header>
                <Card.Title as="h5">Notificaciones</Card.Title>
              </Card.Header>
              <Card.Body>
                {/* Tools para la tabla */}
                <ToolkitProvider
                  keyField="email"
                  data={this.state.notificaciones}
                  columns={columns}
                  search
                >
                  {/* Tools para la tabla */}
                  {props => (
                    <div>
                      {/* Buscado de la tabla */}
                      <SearchBar {...props.searchProps} placeholder="Buscar" />
                      {/* Buscado de la tabla */}
                      {/* Boton de eliminar busquedad */}
                      <ClearSearchButton
                        text="Borrar"
                        className="btn btn-primary shadow-2"
                        {...props.searchProps}
                      />
                      {/* Boton de eliminar busquedad */}
                      <br></br>
                      <br></br>
                      {/* Tabla */}
                      <BootstrapTable
                        defaultSorted={defaultSorted}
                        bordered={false}
                        {...props.baseProps}
                        hover
                        keyField="nombre"
                        data={this.state.notificaciones}
                        columns={columns}
                        pagination={paginationFactory()}
                        wrapperClasses="table-responsive"
                      />
                      {/* Tabla */}
                    </div>
                  )}
                </ToolkitProvider>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  //console.log("pet profile" + JSON.stringify(state))
  return {
    userId: state.firebase.auth.uid,
    authError: state.auth.authError
  };
};

export default connect(mapStateToProps)(Notificaciones);

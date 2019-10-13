import React from "react";
import { Row, Col, Card, Table, Button } from "react-bootstrap";
import Aux from "../../hoc/_Aux";

//-----------------Libreria para tabla de notificaciones - Libreria:react-boostrap-table-2-------------
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
//-----------------Libreria para tabla de notificaciones-------------

//-----------------Libreria del popup o modal------------------------
import Dialog from "react-bootstrap-dialog";
//-----------------Libreria del popup o modal------------------------

import Avatar1 from "../../assets/images/user/avatarDog.jpg";
import Avatar2 from "../../assets/images/user/avatar2.jpg";
import Avatar3 from "../../assets/images/user/avatar3.jpg";
import Avatar4 from "../../assets/images/user/avatar1.jpg";
import Avatar5 from "../../assets/images/user/avatarDog.jpg";
import Avatar6 from "../../assets/images/user/avatarDog1.jpg";

const imagen = {
  minWidth: 140,
  maxHeight: 140,
  minHeight: 140,
  maxWidth: 140
};

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
    dataField: "hora",
    text: "Hora",
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
    this.onClick = this.onClick.bind(this);
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
            <a
              style={{ cursor: "pointer" }}
              class="text-white label theme-bg2 f-12"
              onClick={this.onClick}
            >
              Ver Información
            </a>
            <Dialog
              ref={component => {
                this.dialog = component;
              }}
            />
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
            <a
              style={{ cursor: "pointer" }}
              class="text-white label theme-bg2 f-12"
              onClick={this.onClick}
            >
              Ver Información
            </a>
            <Dialog
              ref={component => {
                this.dialog = component;
              }}
            />
          </div>
        )
      }
    ];
    //----------------------Datos de las notificaciones---------------------
  }
  onClick() {
    this.dialog.show({
      title: "Hay Cita!!!",
      body: (
        <div className="modal-container">
          <div class="d-flex justify-content-between">
            <div>
              <img
                style={imagen}
                className="img-radio"
                src={Avatar5}
                alt="activity-user"
              />
              <br />
              <center>
              <p style={{ fontSize: 20 }}>Lola</p>
              </center>
            </div>
            <div>
            <i
                    style={{ fontSize: 100, color: "#f47386" }}
                    class="fa fa-heart"
                  ></i>
                  </div>
            <div>
              <img
                style={imagen}
                className="img-radio"
                src={Avatar6}
                alt="activity-user"
              />
              <br />
              <center>
              <p style={{ fontSize: 20 }}>Lola</p>
              </center>
            </div>
          </div>
          <div class="row">
            <div class="col text-center">
              <a href="/TablaMascotas">
                <button type="button" class="btn btn-outline-primary btn-lg">
                  <i class="feather icon-mail"></i>Enviar Email
                </button>
              </a>
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
                <ToolkitProvider
                  keyField="email"
                  data={this.notificaciones}
                  columns={columns}
                  search
                >
                  {props => (
                    <div>
                      <SearchBar {...props.searchProps} placeholder="Buscar" />
                      <ClearSearchButton
                        text="Borrar"
                        className="btn btn-primary shadow-2"
                        {...props.searchProps}
                      />
                      <br></br>
                      <br></br>
                      <BootstrapTable
                        defaultSorted={defaultSorted}
                        bordered={false}
                        {...props.baseProps}
                        hover
                        keyField="nombre"
                        data={this.notificaciones}
                        columns={columns}
                        pagination={paginationFactory()}
                        wrapperClasses="table-responsive"
                      />
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

export default Notificaciones;

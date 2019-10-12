import React from "react";
import { Row, Col, Card, Table, Button } from "react-bootstrap";

import Aux from "../../hoc/_Aux";

import Avatar1 from "../../assets/images/user/avatarDog.jpg";
import Avatar2 from "../../assets/images/user/avatar2.jpg";
import Avatar3 from "../../assets/images/user/avatar3.jpg";
import Avatar4 from "../../assets/images/user/avatar1.jpg";

import Match from "../Notificaciones/Match";

//-----------------Libreria para tabla de notificaciones - Libreria:react-boostrap-table-2-------------
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
//-----------------Libreria para tabla de notificaciones-------------

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

//----------------------Datos de las notificaciones---------------------
const notificaciones = [
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
      <a class="text-white label theme-bg2 f-12" href="/PetProfile">
        Ver Información
      </a>
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
      <a class="text-white label theme-bg2 f-12" href="/PetProfile">
        Ver Información
      </a>
    )
  }
];
//----------------------Datos de las notificaciones---------------------

class Notificaciones extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
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
                  data={notificaciones}
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
                        data={notificaciones}
                        columns={columns}
                        pagination={paginationFactory()}
                        wrapperClasses="table-responsive"
                      />
                    </div>
                  )}
                </ToolkitProvider>
                {/* <Table responsive hover>
                  <thead>
                    <tr>
                      <th>Mascota</th>
                      <th>Nombre</th>
                      <th>Usuario</th>
                      <th>Nombre</th>
                      <th>Fecha</th>
                      <th>Hora </th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <h6 class="m-0">
                          <img
                            className="media-object img-radius"
                            src={Avatar1}
                            alt="Generic placeholder"
                          />
                        </h6>
                      </td>
                      <td>Lola</td>
                      <td>
                        <h6 class="m-0">
                          <img
                            className="media-object img-radius"
                            src={Avatar2}
                            alt="Generic placeholder"
                          />
                        </h6>
                      </td>
                      <td>Juan</td>
                      <td>10/05/2019</td>
                      <td>10:50 AM</td>
                      <td>
                        <Match modal={this.state.show} />
                        <a
                          style={{ cursor: "pointer" }}
                          class="text-white label theme-bg2 f-12"
                          onClick={() => this.setState({ show: true })}
                        >
                          Ver Información
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </Table> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Aux>
    );
  }
}

export default Notificaciones;

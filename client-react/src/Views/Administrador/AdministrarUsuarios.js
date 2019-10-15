import React from "react";
import {
  Row,
  Col,
  Card,
  OverlayTrigger,
  Tooltip
} from "react-bootstrap";
import axios from "axios";
import Aux from "../../hoc/_Aux";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import config from "../../config";
import userProfile1 from "../../assets/images/user/avatar1.jpg";
import userProfile2 from "../../assets/images/user/avatar2.jpg";

// Libreria de la tabla: react-boostrap-table-2
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
// Libreria de la tabla: react-boostrap-table-2

//-------Constantes para la busqueda en la tabla------
const { SearchBar, ClearSearchButton } = Search;
//-------Constantes para la busqueda en la tabla------

//-----------EL sort por default de la tabla----------
const defaultSorted = [
  {
    dataField: "nombre",
    order: "asc"
  }
];
//-----------EL sort por default de la tabla----------
//---------Mensaje de Eliminar Usuario-------------------
const deleteUsuario = () => {
  Swal.fire({
    title: "Eliminar Usuario",
    text: "¿Está seguro de que desea eliminarlo?",
    type: "question",
    showCancelButton: true,
    confirmButtonColor: "#8BC3FF",
    cancelButtonColor: "#BFBFBF ",
    cancelButtonText: "Cancelar",
    confirmButtonText: "OK"
  });
};
//---------Mensaje de Eliminar Usuario-------------------

//---------Columnas de la tabla------------------
const columns = [
  {
    dataField: "fotoUsuario",
    text: "Usuario"
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
    dataField: "apellido",
    text: "Apellido",
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
    dataField: "ubicacion",
    text: "Ubicacion",
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
    dataField: "email",
    text: "Email",
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
//---------Columnas de la tabla------------------

//-------------------Datos de los usuarios-------
const usuarios = [
  {
    fotoUsuario: (
      <h6 class="m-0">
        <img
          className="media-object img-radius"
          src={userProfile1}
          alt="Generic placeholder"
        />
      </h6>
    ),
    nombre: "Carlos",
    apellido: "Perez",
    ubicacion: "Resistencia-Chaco",
    email: "juanPere@gmail.com",
    acciones: (
      <div>
        <a class="Mascotas" href="/AdministrarMascotas">
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
        <a class="Editar" href="/UserProfile">
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
        <a
          class="Eliminar"
          style={{ cursor: "pointer" }}
          onClick={function() {
            deleteUsuario();
          }}
        >
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
      </div>
    )
  },
  {
    fotoUsuario: (
      <h6 class="m-0">
        <img
          className="media-object img-radius"
          src={userProfile2}
          alt="Generic placeholder"
        />
      </h6>
    ),
    nombre: "Juan",
    apellido: "Perez",
    ubicacion: "Resistencia-Chaco",
    email: "juanPere@gmail.com",
    acciones: (
      <div>
        <a class="Mascotas" href="/AdministrarMascotas">
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
        <a class="Editar" href="/UserProfile">
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
        <a
          class="Eliminar"
          style={{ cursor: "pointer" }}
          onClick={function() {
            deleteUsuario();
          }}
        >
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
      </div>
    )
  },
  {
    fotoUsuario: (
      <h6 class="m-0">
        <img
          className="media-object img-radius"
          src={userProfile1}
          alt="Generic placeholder"
        />
      </h6>
    ),
    nombre: "Juan",
    apellido: "Perez",
    ubicacion: "Resistencia-Chaco",
    email: "juanPere@gmail.com",
    acciones: (
      <div>
        <a class="Mascotas" href="/AdministrarMascotas">
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
        <a class="Editar" href="/UserProfile">
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
        <a
          class="Eliminar"
          style={{ cursor: "pointer" }}
          onClick={function() {
            deleteUsuario();
          }}
        >
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
      </div>
    )
  }
];
//-------------------Datos de los usuarios-------

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

class AdministrarUsuarios extends React.Component {
  componentDidMount() {
    axios.get(rutaApi + "usuario/" + this.props.userId).then(response => {
      this.setState({
        Usr_cod: response.data.Usr_cod,
        perfiles: response.data.Perfils
      });
      console.log("state 1" + JSON.stringify(this.state));
    });
  }

  render() {
    return (
      <Aux>
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <Card.Title as="h5">Administrar Usuarios</Card.Title>
              </Card.Header>
              <Card.Body>
                {/* Tool para la tabla */}
                <ToolkitProvider
                  keyField="email"
                  data={usuarios}
                  columns={columns}
                  search
                >
                  {/* Tool para la tabla  */}
                  {props => (
                    <div>
                      <div class="d-flex justify-content-between">
                        <div>
                          {/* Buscador de la tabla */}
                          <SearchBar
                            {...props.searchProps}
                            placeholder="Buscar"
                          />
                          <ClearSearchButton
                            text="Borrar"
                            className="btn btn-primary shadow-2"
                            {...props.searchProps}
                          />
                          {/* Buscado de la tabla */}
                        </div>
                        <div>
                          <button onClick={()=> {this.props.history.replace('/AgregarUsuario')}}
                            type="button"
                            class="btn-rounded btn btn-primary"
                          >
                            <i class="feather icon-plus"></i>Usuario
                          </button>
                        </div>
                      </div>
                      <br></br>
                      <br></br>
                      {/* Tabla */}
                      <BootstrapTable
                        defaultSorted={defaultSorted}
                        bordered={false}
                        {...props.baseProps}
                        hover
                        keyField="email"
                        data={usuarios}
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
  //console.log("user profile" + JSON.stringify(state.firebase.auth.uid))
  return {
    userId: state.firebase.auth.uid,
    authError: state.auth.authError
  };
};

export default connect(mapStateToProps)(AdministrarUsuarios);

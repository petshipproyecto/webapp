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

//-----------------Libreria del popup o modal------------------------
import Dialog from "react-bootstrap-dialog";
//-----------------Libreria del popup o modal------------------------

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
    dataField: "raza",
    order: "desc"
  }
];
//-----------EL sort por default de la tabla----------

//---------Columnas de la tabla------------------
const columns = [
  {
    dataField: "idRaza",
    text: "Id Raza",
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
    dataField: "raza",
    text: "Nombre de la Raza",
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

//-------------------Datos de las razas-------
const razas = [
  {
    idRaza: 1,
    raza: "Pincher",
    acciones: (
      <div>
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
      </div>
    )
  },
  {
    idRaza: 2,
    raza: "Rotweiler",
    acciones: (
      <div>
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
      </div>
    )
  },
  {
    idRaza: 3,
    raza: "Cocker",
    acciones: (
      <div>
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
      </div>
    )
  }
];
//-------------------Datos de los razas-------

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

class AdministrarRazas extends React.Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.dialog.show({
      title: "Agregar Nueva Raza",
      body: "Ingrese el nombre de la nueva raza:",
      prompt: Dialog.TextPrompt({
        placeholder: "Nombre de la Raza",
        initialValue: "",
        required: true
      }),
      actions: [Dialog.CancelAction(), Dialog.OKAction()],
      bsSize: "small",
      onHide: dialog => {
        dialog.hide();
        console.log("closed by clicking background.");
      }
    });
  }

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
                <Card.Title as="h5">Administrar razas</Card.Title>
              </Card.Header>
              <Card.Body>
                {/* Tool para la tabla */}
                <ToolkitProvider
                  keyField="email"
                  data={razas}
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
                          <button
                            type="button"
                            class="btn-rounded btn btn-primary"
                            onClick={this.onClick}
                          >
                            <i class="feather icon-plus"></i>Raza
                          </button>

                          <Dialog
                            ref={component => {
                              this.dialog = component;
                            }}
                          />
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
                        keyField="idRaza"
                        data={razas}
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

export default connect(mapStateToProps)(AdministrarRazas);

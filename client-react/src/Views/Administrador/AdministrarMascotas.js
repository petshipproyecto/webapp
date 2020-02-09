import React from "react";
import { Row, Col, Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import axios from "axios";
import Aux from "../../hoc/_Aux";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import config from "../../config";

// Libreria de la tabla: react-boostrap-table-2
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
// Libreria de la tabla: react-boostrap-table-2

import userProfile1 from "../../assets/images/user/avatarDog.jpg";

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
//---------Mensaje de Eliminar Mascota-------------------
const deleteMascota = (idPerfil) => {
  axios.delete(rutaApi + "perfil/" + idPerfil).then(()=>{console.log('borrado')}).catch(e =>{console.log(e)})
  Swal.fire({
    title: "Eliminar Mascota",
    text: "¿Está seguro de que desea eliminarlo?",
    type: "question",
    showCancelButton: true,
    confirmButtonColor: "#8BC3FF",
    cancelButtonColor: "#BFBFBF ",
    cancelButtonText: "Cancelar",
    confirmButtonText: "OK"
  });
};
//---------Mensaje de Eliminar Mascota-------------------

//---------Columnas de la tabla------------------
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
    dataField: "tipoMascota",
    text: "Tipo de Mascota",
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
    text: "Raza",
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
    dataField: "edad",
    text: "Edad",
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

//-------------------Datos de las Mascotas-------
const generateMascota = (mascota,thiss) => { 
  console.log('mascota ' + JSON.stringify(mascota));
  return {
    fotoMascota: (
      <h6 class="m-0">
        <img
          className="media-object img-radius"
          src={userProfile1 || mascota.Imagen}
          alt="Generic placeholder"
        />
      </h6>
    ),
    nombre: mascota.Nombre,
    tipoMascota: mascota.Raza.Animal.Descripcion,
    raza: mascota.Raza.Descripcion,
    edad: mascota.Edad,
    acciones: (
      <div>
        {/* Boton ver mascota */}
        <a class="Ver" onClick={()=>{thiss.props.history.push('/PetProfile',{mascotaSeleccionada: mascota.Id_perfil})}}>
          <OverlayTrigger
            placement="left"
            delay={{ show: 250, hide: 400 }}
            overlay={<Tooltip>Ver</Tooltip>}
          >
            <i
              style={{ fontSize: 24, color: "#f47386" }}
              className="fa fa-eye"
            />
          </OverlayTrigger>
        </a>
        {/* Boton ver mascota */}
        &nbsp;
        {/* Boton editar mascota */}
        <a class="Editar"  onClick={()=>{thiss.props.history.push('/PetProfile',{mascotaSeleccionada: mascota.Id_perfil})}}>
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
        {/* Boton editar mascota */}
        {/* Boton eliminar mascota */}
        <a
          class="Eliminar"
          style={{ cursor: "pointer" }}
          onClick={function() {
            deleteMascota(mascota.Id_perfil);
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
        {/* Boton eliminar mascota */}
      </div>
    )
  }
};
//-------------------Datos de los mascotas-------

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


class AdministrarMascotas extends React.Component {
  state = {mascotas: []}
  componentDidMount() {
    const uID = this.props.history.location.state ? this.props.history.location.state.adminUser : this.props.userId;
  
   let a = [];

    axios.get(rutaApi + "usuario/" + uID).then(response => {      
      const perfiles =  response.data.Perfils; 
      for (let i=0; i <perfiles.length ; i++){
        a.push(generateMascota(perfiles[i], this));
      }     

     // console.log("perfiles " + JSON.stringify(perfiles));
     this.setState({mascotas: a, userId: uID},()=>{ console.log(this.state.mascotas)}) 
    });
      

  }

  render() {
    console.log('m' + JSON.stringify(this.state.mascotas))
    return (
      <Aux>
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <Card.Title as="h5">Administrar Mascotas</Card.Title>
              </Card.Header>
              <Card.Body>
                {/* Tool para la tabla */}
                <ToolkitProvider
                  keyField="nombre"
                  data={this.state.mascotas}
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
                            onClick={() => {
                              
                              this.props.history.push('/NewPet',{adminUser: this.state.userId});

                            }}
                          >
                            <i class="feather icon-plus"></i>Mascota
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
                        keyField="nombre"
                        data={this.state.mascotas}
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

export default connect(mapStateToProps)(AdministrarMascotas);

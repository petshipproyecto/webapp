import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
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

import swal from 'sweetalert';
// Libreria de la tabla: react-boostrap-table-2

import userProfile1 from "../../assets/images/user/avatar1.jpg";
import userProfile2 from "../../assets/images/user/avatar2.jpg";

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
const deleteUsuario = async(idBBDD, idFirebase) => {  
console.log('deleteUsuario: ' + idBBDD + idFirebase)
// console.log(await admin.auth().getUser(idFirebase));
swal({
  title: "Eliminar",
  text: "Seguro desea eliminar?",
  icon: "warning",
  buttons: ["Cancelar", true],
}).then(willDelete => {
  if (willDelete) {
    axios.delete(rutaApi + "usuario/" + idFirebase).then(()=>{ window.location.reload()})
  
  .then(()=>{
    console.log('workds')
  }).catch(e =>{console.log(e)}); 
  }
})
  

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
    dataField: "acciones",
    text: "Acciones"
  }
];
//---------Columnas de la tabla------------------

//-------------------Datos de los usuarios-------
const generateRecord = (user,thiss) => {
  console.log("generateRecord: " + user.Imagen + user.Nombre + user.Apellido + user.Id_usuario + user.Usr_cod )
  return {
    fotoUsuario: (
      <h6 class="m-0">
        <img
          className="media-object img-radius"
          src={user.Imagen || userProfile1}
          alt="Generic placeholder"
        />
      </h6>
    ),
    nombre: user.Nombre,
    apellido: user.Apellido,
    acciones: (
      <div>
        {/* Boton mascotas del usuario */}
        <a class="Mascotas"  onClick={()=>{
          thiss.props.history.push('/AdministrarMascotas',{adminUser: user.Usr_cod});
            /*
            console.log(user.Perfils.length)
            if (user.Perfils.length > 4){
              console.log('hola test')
              swal({
                title: "Error",
                text: "Limite de Perfiles excedido",
                icon: "error",
                timer: 3000,
                button: false
              })       
            } else {
              
            }*/
        }}>
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
        {/* Boton ver Usuario */}
        <a class="Ver" onClick={()=>{}}>
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
        {/* Boton ver usuario */}
        &nbsp;
        {/* Boton mascotas del usuario */}
        &nbsp;
        {/* Boton editar usuario */}
        <a class="Editar"  onClick={()=>{thiss.props.history.push('/UserProfile',{adminUser: user.Usr_cod})}}>
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
        {/* Boton editar usuario */}
        {/* Boton eliminar usuario */}
        <a
          class="Eliminar"
          style={{ cursor: "pointer" }}
          onClick={function() {
            deleteUsuario(user.Id_usuario, user.Usr_cod);
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
        {/* Boton eliminar usuario */}
      </div>
    )
  }
};
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
  state = {
    usuarios:[]
  }

  async componentDidMount() {
    

    axios.get(rutaApi + "usuario/" + this.props.userId).then(response => {
      this.setState({
        Usr_cod: response.data.Usr_cod,
        perfiles: response.data.Perfils
      });
      console.log("state 1" + JSON.stringify(this.state));
    });
    
    const users = await axios.get(rutaApi + "usuario");
    console.log(users.data.length)
    let userAux = {}
    let usersAux = [];
    for (let i=0; i < users.data.length; i++){
      
      if (!users.data[i].Is_admin){
        userAux = generateRecord(users.data[i], this);
        usersAux.push(userAux)
      }
     
    }
    this.setState({usuarios:usersAux})
    //console.log(JSON.stringify(this.usuarios))
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
                  keyField="apellido"
                  data={this.state.usuarios}
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
                          {/* Buscador de la tabla */}
                        </div>
                        <div>
                          {/* Boton de agregar usuario */}
                          <button
                            onClick={() => {                              
                             this.props.history.replace("/AgregarUsuario");
                            }}
                            type="button"
                            class="btn-rounded btn btn-primary"
                          >
                            <i class="feather icon-plus"></i>Usuario
                          </button>
                          {/* Boton de agregar usuario */}
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
                        keyField="apellido"
                        data={this.state.usuarios}
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

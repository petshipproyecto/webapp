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
import swal from 'sweetalert';

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
    dataField: "idTipoMascota",
    order: "asc"
  }
];
//-----------EL sort por default de la tabla----------

//---------Mensaje de Eliminar Tipo de Animal-------------------
const deleteTipoAnimal = (idAnimal) => {
  swal({
    title: "Eliminar",
    text: "Seguro desea eliminar?",
    icon: "warning"
  }).then(willDelete => {
    if (willDelete) {
      axios.delete(rutaApi + "animal/" + idAnimal)
    .then(()=>{
      console.log('workds');
      window.location.replace("/AdministrarTiposDeMascotas");
    }).catch(e =>{console.log(e)}); 
    }
  })
};
//---------Mensaje de Eliminar Tipo de Animal-------------------

//---------Columnas de la tabla------------------
const columns = [
  {
    dataField: "idTipoMascota",
    text: "Id Tipo Mascota",
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
    text: "Nombre del Tipo de Mascota",
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

class AdminTipoMascota extends React.Component {
  constructor() {
    super();
    this.onAgregar = this.onAgregar.bind(this);
    this.onEditar = this.onEditar.bind(this);
    this.generateRecord = this.generateRecord.bind(this);

    //-------------------Datos de los tipos de Mascotas-------
    
    //-------------------Datos de los tipos de mascotas-------
  }
  generateRecord(tipoMascota,thiss){

    return {
      idTipoMascota: tipoMascota.Id_animal,
      tipoMascota: tipoMascota.Descripcion,
      acciones: (
        <div>
          {/* Boton de ver razas */}
          <a class="Razas" onClick={()=>{thiss.props.history.push('/AdministrarRazas',{tipoMascota: tipoMascota.Id_animal})}}>
            <OverlayTrigger
              placement="left"
              delay={{ show: 250, hide: 400 }}
              overlay={<Tooltip>Razas</Tooltip>}
            >
              <i
                style={{ fontSize: 24, color: "#f47386" }}
                className="icon feather icon-plus"
              />
            </OverlayTrigger>
          </a>
          {/* Boton de ver razas */}
          {/* Boton de editar tipo de mascota*/}
          <a
            class="Edit"
            onClick={()=>{this.onEditar(tipoMascota.Id_animal)}}
            style={{ cursor: "pointer" }}
          >
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
          <Dialog
            ref={component => {
              this.dialog = component;
            }}
          />
          {/* Boton de editar tipo de mascota*/}
          {/* Boton de eliminar tipo de mascota*/}
          <a
            class="Eliminar"
            style={{ cursor: "pointer" }}
            onClick={function() {
              deleteTipoAnimal(tipoMascota.Id_animal);
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
          {/* Boton de eliminar tipo de mascota*/}
        </div>
      )
    }
  
  }
  

  //-------------- Modal de agregar nuevo tipo de mascota--------
  onAgregar() {
    this.dialog.show({
      title: "Agregar Nuevo Tipo de Mascota",
      body: "Ingrese el nombre del nuevo tipo de mascota:",
      prompt: Dialog.TextPrompt({
        placeholder: "Nombre del tipo de mascota",
        initialValue: "",
        required: true
      }),
      actions: [Dialog.CancelAction(), Dialog.OKAction((dialog) =>{
        axios.post(rutaApi+'animal', {idRaza:this.state.tipoMascota,Descripcion: dialog.value }).then(()=>{console.log('works'); window.location.replace("/AdministrarTiposDeMascotas");})
        
      })],
      bsSize: "small",
      onHide: dialog => {
        dialog.hide();
        console.log("closed by clicking background.");
      }
    });
  }
  //-------------- Modal de agregar nuevo tipo de mascota--------

  //-------------- Modal de editar tipo de mascota--------
  onEditar(idAnimal) {
    this.dialog.show({
      title: "Editar Tipo de Mascota",
      body: "Ingrese el nombre del tipo de mascota:",
      prompt: Dialog.TextPrompt({
        placeholder: "Nombre del tipo de mascota",
        initialValue: "",
        required: true
      }),
      actions: [Dialog.CancelAction(), Dialog.OKAction((dialog) =>{
        axios.put(rutaApi+'animal/'+idAnimal, {Descripcion: dialog.value }).then(()=>{console.log('works');window.location.replace("/AdministrarTiposDeMascotas");})
        
      })],
      bsSize: "small",
      onHide: dialog => {
        dialog.hide();
        console.log("closed by clicking background.");
      }
    });
  }
  //-------------- Modal de editar tipo de mascota--------

  state = {tipoMascotas:[]};
  componentDidMount() {
    axios.get(rutaApi + "usuario/" + this.props.userId).then(response => {
      this.setState({
        Usr_cod: response.data.Usr_cod,
        perfiles: response.data.Perfils
      });
      //console.log("state 1" + JSON.stringify(this.state));
    });

    axios.get(rutaApi + 'animal').then((animales)=>{
      let tipoMascotas = [];
      for(let i=0; i < animales.data.length; i++){
        tipoMascotas.push(this.generateRecord(animales.data[i], this));
      }
     this.setState({tipoMascotas})

    }).catch(e=> console.log(e))
  }

  render() {
    return (
      <Aux>
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <Card.Title as="h5">Administrar Tipo de Mascotas</Card.Title>
              </Card.Header>
              <Card.Body>
                {/* Tool para la tabla */}
                <ToolkitProvider
                  keyField="nombre"
                  data={this.state.tipoMascotas}
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
                          {/* Boton Agregar nuevo tipo de mascota */}
                          <button
                            type="button"
                            class="btn-rounded btn btn-primary"
                            onClick={this.onAgregar}
                          >
                            <i class="feather icon-plus"></i>Tipo de Mascota
                          </button>
                          <Dialog
                            ref={component => {
                              this.dialog = component;
                            }}
                          />
                          {/* Boton Agregar nuevo tipo de mascota */}
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
                        keyField="idTipoMascota"
                        data={this.state.tipoMascotas}
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

export default connect(mapStateToProps)(AdminTipoMascota);

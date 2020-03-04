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
import swal from 'sweetalert';
import config from "../../config";

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

//-----------El sort por default de la tabla----------
const defaultSorted = [
  {
    dataField: "idRaza",
    order: "asc"
  }
];
//-----------El sort por default de la tabla----------

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

//---------Mensaje de Eliminar Raza-------------------
const deleteRaza = (idRaza) => {
  swal({
    title: "Eliminar",
    text: "Seguro desea eliminar?",
    icon: "warning",    
    buttons: ["Cancelar", true]
  })
  .then(willDelete => {
    if (willDelete) {
     axios.delete(rutaApi + "raza/" + idRaza)
     .then(()=>{console.log('borrado');
     window.location.reload(); })
     .catch(e =>{console.log(e)})
    }
  });
};
//---------Mensaje de Eliminar Raza-------------------

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
    this.onAgregar = this.onAgregar.bind(this);
    this.onEditar = this.onEditar.bind(this);
    this.generateRecord = this.generateRecord.bind(this);
    //-------------------Datos de las razas-------
   
  
    //-------------------/Datos de las razas-----------------------------
  }
  state = {tipoMascotas: [], tipoMascota:null}

  generateRecord(raza,thiss){
    return {
      idRaza: raza.Id_raza,
      raza: raza.Descripcion,
      acciones: (
        <div>
          <a
            class="Editar"
            onClick={()=>{this.onEditar(raza.Id_raza,raza.Descripcion )}}
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
          <a
            class="Eliminar"
            style={{ cursor: "pointer" }}
            onClick={function() {
              deleteRaza(raza.Id_raza);
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
  };
  //---------Mensaje de Agregar Raza-------------------
  onAgregar(thiss) {
    this.dialog.show({
      title: "Agregar Nueva Raza",
      body: "Ingrese el nombre de la nueva raza:",
      prompt: Dialog.TextPrompt({
        placeholder: "Nombre de la Raza",
        initialValue: "",
        required: true
      }),
      actions: [Dialog.CancelAction(), Dialog.OKAction(
        (dialog) => {
          axios.post(rutaApi+'raza', {Descripcion: dialog.value, Id_animal:this.state.tipoMascota  })
          .then(()=>{
            const newElement = this.generateRecord({idRaza:this.state.tipoMascota,raza:dialog.value},this);
            //this.props.history.push('/AdministrarRazas',{tipoMascota: this.state.tipoMascota});
            //this.setState({tipoMascotas: this.state.tipoMascotas, ...newElement }, ()=>{console.log(JSON.stringify(this.state))})
            window.location.reload();
            
            
          })
        }
      )],
      bsSize: "small",
      onHide: dialog => {
        dialog.hide();
        console.log("closed by clicking background.");
      }
    });
  }
  //---------/Mensaje de Agregar Raza-------------------

  //---------Mensaje de Editar Raza-------------------
  onEditar(idRaza, Descripcion) {
    this.dialog.show({
      title: "Editar Raza",
      body: "Ingrese el nombre de la raza:",
      prompt: Dialog.TextPrompt({
        placeholder: Descripcion,
        initialValue: Descripcion,
        required: true
      }),
      actions: [Dialog.CancelAction(), Dialog.OKAction(
       
        (dialog) => {
          axios.put(rutaApi+'raza/'+ idRaza, {Descripcion: dialog.value })
          .then(()=>{console.log('works');  window.location.reload();
        })
        }
        

      )],
      bsSize: "small",
      onHide: dialog => {
        dialog.hide();
        console.log("closed by clicking background.");
      }
    });
  }
  //---------/Mensaje de Editar Raza-------------------

  componentDidMount() {
    /*
    axios.get(rutaApi + "usuario/" + this.props.userId).then(response => {
      this.setState({
        Usr_cod: response.data.Usr_cod,
        perfiles: response.data.Perfils
      });
      console.log("state 1" + JSON.stringify(this.state));
    });
    */
   const tipoMascota = this.props.history.location.state ? this.props.history.location.state.tipoMascota : null;
   this.setState({tipoMascota})

   axios.get(rutaApi + 'animal/'+tipoMascota).then((animales)=>{
      let tipoMascotas = [];
      for(let i=0; i < animales.data.Razas.length; i++){
        tipoMascotas.push(this.generateRecord(animales.data.Razas[i], this));
      }
    this.setState({tipoMascotas})
    })
  
  }

  render() {
    return (
      <Aux>
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <Card.Title as="h5">Administrar razas de.....</Card.Title>
              </Card.Header>
              <Card.Body>
                {/* Tool para la tabla */}
                <ToolkitProvider
                  keyField="idRaza"
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
                          <button
                            type="button"
                            class="btn-rounded btn btn-primary"
                            onClick={()=>{this.onAgregar(this)}}
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

export default connect(mapStateToProps)(AdministrarRazas);

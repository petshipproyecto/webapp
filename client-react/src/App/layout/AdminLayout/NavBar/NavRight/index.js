import React, { Component } from "react";
import { Dropdown, OverlayTrigger, Tooltip, Spinner } from "react-bootstrap";
import {signOut} from '../../../../../../src/store/actions/user'
import { connect } from 'react-redux';
import ChatList from "./ChatList";
import Aux from "../../../../../hoc/_Aux";
import DEMO from "../../../../../store/constant";
import axios from 'axios'

import "../../../../../assets/scss/partials/theme-elements/_tooltip.scss";

import Avatar1 from "../../../../../assets/images/user/avatarCat.jpg";
import Avatar2 from "../../../../../assets/images/user/avatarDog.jpg";
import Avatar3 from "../../../../../assets/images/user/avatarChinchilla.jpg";

class NavRight extends Component {
  state = {
    listOpen: false,
    perfiles: [
      
    ]
  };
  

  render() {
    const loadProfiles = () =>{
      
      axios.get('https://petshipback-dev.herokuapp.com/usuario/' + this.props.userId).then(response =>{        
        this.setState({perfiles: response.data.Perfils});
      }).catch(e =>{

      })
      

    }

    const setTargetProfile = (perfil) =>{
      console.log(perfil)
      
      axios.put('https://petshipback-dev.herokuapp.com/usuario/' + this.props.userId,{
        Id_perfil_activo: perfil
      }).then(response =>{        
        console.log(response)
      }).catch(e =>{

      })
      
    }
    
    return (
      <Aux>
        <ul className="navbar-nav ml-auto">
          <li className={this.props.rtlLayout ? "m-r-15" : "m-l-15"}>
            <a href="/NewPet">
              <OverlayTrigger
                placement="left"
                delay={{ show: 250, hide: 400 }}
                overlay={<Tooltip>Agregar Mascota</Tooltip>}
              >
                <i className="icon feather icon-plus-circle" />
              </OverlayTrigger>
            </a>
          </li>
          <li className={this.props.rtlLayout ? "m-r-15" : "m-l-15"}>
            <a href="/ConfiguracionBusqueda">
              <OverlayTrigger
                placement="left"
                delay={{ show: 250, hide: 400 }}
                overlay={<Tooltip>Filtrar Busqueda</Tooltip>}
              >
                <i className="icon feather icon-filter" />
              </OverlayTrigger>
            </a>
          </li>
          <li>
            <Dropdown alignRight={!this.props.rtlLayout} onClick={ loadProfiles}>
              <Dropdown.Toggle variant={"link"} id="dropdown-basic">
              <OverlayTrigger
                placement="left"
                delay={{ show: 250, hide: 400 }}
                overlay={<Tooltip>Seleccionar Mascota</Tooltip>}
              >
                <i className="icon feather icon-gitlab" />
                </OverlayTrigger>
              </Dropdown.Toggle>
              <Dropdown.Menu alignRight className="notification" >
                <div className="noti-head">
                  <h6 className="d-inline-block m-b-0">Perfiles de Mascotas Disponibles</h6>
                </div>
                <ul className="noti-body">
                  {
                    

                    this.state.perfiles !== 0 ?
                    (
                    this.state.perfiles.map(element => {
                      return(
                        <li className="notification" onClick={function(){setTargetProfile(element.Id_perfil)}}>
                      <div className="media">
                        <img
                          className="media-object img-radius"
                          src={element.Imagen}
                          alt="Generic placeholder"
                        />
                        <div className="media-body">
                          <p class="pt-3">{element.Nombre}</p>
                        </div>
                      </div>
                    </li>
              
                      )
                    
                  })
                    ): ( () => {return (<Spinner animation="border" />) })
                      
    
                    

                  
                  }
                    
                      
                  
                      
                   
                  </ul>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li>
            <Dropdown alignRight={!this.props.rtlLayout}>
              <Dropdown.Toggle variant={"link"} id="dropdown-basic">
                <i className="icon feather icon-bell" />
              </Dropdown.Toggle>
              <Dropdown.Menu alignRight className="notification">
                <div className="noti-head">
                  <h6 className="d-inline-block m-b-0">Notificaciones</h6>
                  <div className="float-right">
                    <a href={DEMO.BLANK_LINK} className="m-r-10">
                      marcar como leido
                    </a>
                    <a href={DEMO.BLANK_LINK}>Eliminar Todos</a>
                  </div>
                </div>
                <ul className="noti-body">
                  <li className="notification">
                    <div className="media">
                      <img
                        className="img-radius"
                        src={Avatar1}
                        alt="Generic placeholder"
                      />
                      <div className="media-body">
                        <p>
                          <strong>John Doe</strong>
                          <span className="n-time text-muted">
                            <i className="icon feather icon-clock m-r-10" />
                            30 min
                          </span>
                        </p>
                        <p>Hizo match en tu perfil</p>
                      </div>
                    </div>
                  </li>
                  <li className="notification">
                    <div className="media">
                      <img
                        className="img-radius"
                        src={Avatar2}
                        alt="Generic placeholder"
                      />
                      <div className="media-body">
                        <p>
                          <strong>Joseph William</strong>
                          <span className="n-time text-muted">
                            <i className="icon feather icon-clock m-r-10" />
                            30 min
                          </span>
                        </p>
                        <p>Hizo match en tu perfil</p>
                      </div>
                    </div>
                  </li>
                  <li className="notification">
                    <div className="media">
                      <img
                        className="img-radius"
                        src={Avatar3}
                        alt="Generic placeholder"
                      />
                      <div className="media-body">
                        <p>
                          <strong>carolina Soudein</strong>
                          <span className="n-time text-muted">
                            <i className="icon feather icon-clock m-r-10" />
                            30 min
                          </span>
                        </p>
                        <p>Hizo match en tu perfil</p>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="noti-footer">
                  <a href="/Notificaciones">ver todo</a>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li>
            <Dropdown alignRight={!this.props.rtlLayout} className="drp-user">
              <Dropdown.Toggle variant={"link"} id="dropdown-basic">
                <i className="icon feather icon-settings" />
              </Dropdown.Toggle>
              <Dropdown.Menu alignRight className="profile-notification">
                <div className="pro-head">
                  <img
                    src={Avatar1}
                    className="img-radius"
                    alt="User Profile"
                  />
                  <span>Eve Doe</span>
                </div>
                <ul className="pro-body">
                  <li>
                    <a href="/UserProfile" className="dropdown-item">
                      <i className="feather icon-user" />
                      Mi Perfil
                    </a>
                  </li>
                  <li>
                    <a href="/PetProfile" className="dropdown-item">
                      <i className="feather icon-github" />
                      Perfil de Mascota
                    </a>
                  </li>
                  <li>
                    <a href="/TablaMascotas" className="dropdown-item">
                      <i className="feather icon-settings" />
                      Administrar Mascotas
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item" onClick={this.props.signOut}>
                      <i className="feather icon-lock" />
                      Cerrar Sesión
                    </a>
                  </li>
                </ul>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
        <ChatList
          listOpen={this.state.listOpen}
          closed={() => {
            this.setState({ listOpen: false });
          }}
        />
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log("pet profile" + JSON.stringify(state.firebase.auth.uid))
   return {
     userId: state.firebase.auth.uid,
     authError: state.auth.authError
   }
 }
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavRight)


 


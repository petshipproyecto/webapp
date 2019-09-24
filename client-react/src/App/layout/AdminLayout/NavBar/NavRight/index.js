import React, { Component } from "react";
import { Dropdown, OverlayTrigger, Tooltip, Spinner } from "react-bootstrap";
import { signOut } from "../../../../../../src/store/actions/user";
import { connect } from "react-redux";
import ChatList from "./ChatList";
import Aux from "../../../../../hoc/_Aux";
import DEMO from "../../../../../store/constant";
import axios from "axios";
import config from '../../../../../config'
import { ClipLoader } from 'react-spinners';
import Img_mascota_anonima from "../../../../../assets/images/user/mascota_anonima.png"
import { Route, Redirect } from 'react-router-dom';

import "../../../../../assets/scss/partials/theme-elements/_tooltip.scss";

import Avatar1 from "../../../../../assets/images/user/avatarCat.jpg";
import Avatar2 from "../../../../../assets/images/user/avatarDog.jpg";
import Avatar3 from "../../../../../assets/images/user/avatarChinchilla.jpg";

var rutaApi = config.rutaApi

class NavRight extends Component {
  state = {
    listOpen: false,
    perfiles: [],
    loading: true,
    perfil_activo: null,
    usuario: {
      Nombre: "",
      Apellido: "",
      Imagen: Avatar1
    }
  };

  render() {
    const loadProfiles = () => {
      axios
        .get(
          rutaApi + 'usuario/' + this.props.userId
        )
        .then(response => {
          this.setState({ perfiles: response.data.Perfils, loading: false, usuario: response.data, imagen: response.data.Imagen });
          axios
            .get(rutaApi + 'perfil/' + response.data.Id_perfil_activo)
            .then(response => {
              this.setState({
                perfil_activo: response.data
              });
            })
        })
        .catch(e => {}); 
    };

    

    const setTargetProfile = perfil => {
      //console.log(perfil);

      axios
        .put(
          rutaApi + 'usuario/' + this.props.userId,
          {
            Id_perfil_activo: perfil
          }
        )
        .then(response => {
          window.location.replace('/Dashboard')
        })
        .catch(e => {});
    };

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
          {/*
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
        */}
          <li>
            <Dropdown alignRight={!this.props.rtlLayout} onClick={loadProfiles}>
              <Dropdown.Toggle variant={"link"} id="dropdown-basic">
                <OverlayTrigger
                  placement="left"
                  delay={{ show: 250, hide: 400 }}
                  overlay={<Tooltip>Seleccionar Mascota</Tooltip>}
                >
                  <i className="fa fa-paw" />
                </OverlayTrigger>
              </Dropdown.Toggle>
              <Dropdown.Menu alignRight className="notification" style={{width:80}}>
                <div className="noti-head">
                  <h6 className="d-inline-block m-b-0">
                    Perfiles de Mascotas Disponibles
                  </h6>
                </div>

                <ul className="noti-body">
                  {this.state.perfiles !== 0
                    ? this.state.perfiles.map(element => {
                        return (
                          <li
                            className="notification"
                            style={{cursor: "pointer"}}
                            onClick={function() {
                              setTargetProfile(element.Id_perfil);
                            }}
                          >
                            <div className="media">
                              <img
                              style={{border:"solid 2px #f47386"}}
                                className="media-object img-radius"
                                src={element.Imagen}
                                alt="Generic placeholder"
                              />
                              <div
                                className="media-body"
                                style={{ verticalAlign: "center" }}
                              >
                                <p
                                  class="pt-3"
                                  style={{fontWeight: "bolder"}}
                                >
                                  {element.Nombre}
                                </p>
                              </div>
                            </div>
                          </li>
                        );
                      })
                    : () => {
                        return <div>No hay mascotas disponibles</div>;
                      }}
                    <li>
                      <ClipLoader
                        sizeUnit={"px"}
                        size={150}
                        color={'#red'}
                        loading={this.state.loading}
                      />
                    </li>
                </ul>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          {/*
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
        */}
          <li>
            <Dropdown alignRight={!this.props.rtlLayout} className="drp-user" onClick={loadProfiles}>
              <Dropdown.Toggle variant={"link"} id="dropdown-basic">
                <i className="icon feather icon-settings" />
              </Dropdown.Toggle>
              <Dropdown.Menu alignRight className="profile-notification">
                <div className="pro-head">
                  <img
                    src={this.state.perfil_activo ? this.state.perfil_activo.Imagen : Img_mascota_anonima}
                    className="img-radius"
                    alt="User Profile"
                  />
                  <span> {this.state.perfil_activo ? this.state.perfil_activo.Nombre : ''} </span>
                </div>
                <ul className="pro-body">
                  <li>
                    <a href="/PetProfile" className="dropdown-item">
                      <i className="feather icon-github" />
                      Perfil de Mascota
                    </a>
                  </li>
                  <li>
                    <a href="/UserProfile" className="dropdown-item">
                      <i className="feather icon-user" />
                      Perfil de Usuario
                    </a>
                  </li>
                  {/*
                  <li> 
                    <a href="/TablaMascotas" className="dropdown-item">
                      <i className="feather icon-settings" />
                      Administrar Mascotas
                    </a>
                  </li>
                */}
                  
                  <li>
                    <a
                      href="#"
                      className="dropdown-item"
                      onClick={this.props.signOut}
                    >
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

const mapStateToProps = state => {
  //console.log("pet profile" + JSON.stringify(state))
  return {
    userId: state.firebase.auth.uid,
    authError: state.auth.authError
  };
};
const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavRight);

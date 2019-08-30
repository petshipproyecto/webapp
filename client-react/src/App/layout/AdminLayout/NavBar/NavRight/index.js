import React, { Component } from "react";
import { Dropdown, OverlayTrigger, Tooltip } from "react-bootstrap";

import ChatList from "./ChatList";
import Aux from "../../../../../hoc/_Aux";
import DEMO from "../../../../../store/constant";

import "../../../../../assets/scss/partials/theme-elements/_tooltip.scss";

import Avatar1 from "../../../../../assets/images/user/avatarCat.jpg";
import Avatar2 from "../../../../../assets/images/user/avatarDog.jpg";
import Avatar3 from "../../../../../assets/images/user/avatarChinchilla.jpg";

class NavRight extends Component {
  state = {
    listOpen: false
  };

  render() {
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
            <Dropdown alignRight={!this.props.rtlLayout}>
              <Dropdown.Toggle variant={"link"} id="dropdown-basic">
              <OverlayTrigger
                placement="left"
                delay={{ show: 250, hide: 400 }}
                overlay={<Tooltip>Seleccionar Mascota</Tooltip>}
              >
                <i className="icon feather icon-gitlab" />
                </OverlayTrigger>
              </Dropdown.Toggle>
              <Dropdown.Menu alignRight className="notification">
                <div className="noti-head">
                  <h6 className="d-inline-block m-b-0">Perfiles de Mascotas Disponibles</h6>
                </div>
                <ul className="noti-body">
                    <a href="/dashboard/default">
                      <li className="notification">
                        <div className="media">
                          <img
                            className="media-object img-radius"
                            src={Avatar1}
                            alt="Generic placeholder"
                          />
                          <div className="media-body">
                            <p class="pt-3">Firulais</p>
                          </div>
                        </div>
                      </li>
                    </a>
                  </ul>
                  <ul className="noti-body">
                    <a href="/dashboard/default">
                      <li className="notification">
                        <div className="media">
                          <img
                            className="media-object img-radius"
                            src={Avatar2}
                            alt="Generic placeholder"
                          />
                          <div className="media-body">
                            <p class="pt-3">Kitty</p>
                          </div>
                        </div>
                      </li>
                    </a>
                  </ul>
                  <ul className="noti-body">
                    <a href="/dashboard/default">
                      <li className="notification">
                        <div className="media">
                          <img
                            className="media-object img-radius"
                            src={Avatar3}
                            alt="Generic placeholder"
                          />
                          <div className="media-body">
                            <p class="pt-3">Lola</p>
                          </div>
                        </div>
                      </li>
                    </a>
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
                          <strong>Sara Soudein</strong>
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
                    <a href="/SignIn" className="dropdown-item">
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

export default NavRight;

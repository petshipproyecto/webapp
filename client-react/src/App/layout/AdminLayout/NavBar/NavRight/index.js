import React, { Component } from "react";
import { Dropdown, OverlayTrigger, Tooltip } from "react-bootstrap";
import {signOut} from '../../../../../../src/store/actions/user'
import { connect } from 'react-redux';
import ChatList from "./ChatList";
import Aux from "../../../../../hoc/_Aux";
import DEMO from "../../../../../store/constant";

import "../../../../../assets/scss/partials/theme-elements/_tooltip.scss";

import Avatar1 from "../../../../../assets/images/user/avatar1.jpg";
import Avatar2 from "../../../../../assets/images/user/avatar2.jpg";
import Avatar3 from "../../../../../assets/images/user/avatar3.jpg";

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
                  <a href={DEMO.BLANK_LINK}>ver todo</a>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          {/* <li className={this.props.rtlLayout ? 'm-r-15' : 'm-l-15'}>
                        <a href={DEMO.BLANK_LINK} className="displayChatbox" onClick={() => {this.setState({listOpen: true});}}><i className="icon feather icon-mail"/></a>
                    </li> */}
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
                  <a
                    href={DEMO.BLANK_LINK}
                    className="dud-logout"
                    title="Logout"
                  >
                    <i className="feather icon-log-out" />
                  </a>
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
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavRight)

import React, { Component } from "react";
import { connect } from "react-redux";
import { Dropdown } from "react-bootstrap";
import windowSize from "react-window-size";
import axios from "axios";
import NavSearch from "./NavSearch";
import Aux from "../../../../../hoc/_Aux";
// import DEMO from "../../../../../store/constant";
import * as actionTypes from "../../../../../store/actions/actions";
import Img_usuario_anonima from "../../../../../assets/images/user/usuario_anonimo.png";
import config from "../../../../../config";
import { Link, Route, Redirect } from "react-router-dom";

var rutaApi = config.rutaApi;
class NavLeft extends Component {
  state = {
    usuario: {
      Nombre: "",
      Apellido: "",
      Imagen: ""
    }
  };

  componentDidMount() {
    axios.get(rutaApi + "usuario/" + this.props.userId).then(response => {
      this.setState({
        Nombre: response.data.Nombre,
        Apellido: response.data.Apellido,
        Imagen: response.data.Imagen,
        isAdmin: response.data.Is_admin
      });
    });
  }

  render() {
    // let iconFullScreen = ['feather'];
    // iconFullScreen = (this.props.isFullScreen) ? [...iconFullScreen, 'icon-minimize'] : [...iconFullScreen, 'icon-maximize'];

    let navItemClass = ["nav-item"];
    if (this.props.windowWidth <= 575) {
      navItemClass = [...navItemClass, "d-none"];
    }
    let dropdownRightAlign = false;
    if (this.props.rtlLayout) {
      dropdownRightAlign = true;
    }
    return (
      <Aux>
        <ul className="navbar-nav mr-auto">
          <li></li>
          {this.state.isAdmin ? (
            <li className="nav-item hidden-xs">
              <img
                src={
                  this.state.Imagen ? this.state.Imagen : Img_usuario_anonima
                }
                className="img-radius"
                alt="User Profile"
              />
              &nbsp;&nbsp;
              <span className="ocultar" style={{ fontWeight: "bold" }}>
                {this.state.Apellido}&nbsp;{this.state.Nombre}
              </span>
            </li>
          ) : (
            <li className="nav-item hidden-xs">
              <Link to="/UserProfile">
                <img
                  src={
                    this.state.Imagen ? this.state.Imagen : Img_usuario_anonima
                  }
                  className="img-radius"
                  alt="User Profile"
                />
                &nbsp;&nbsp;
                <span className="ocultar" style={{ fontWeight: "bold" }}>
                  {this.state.Apellido}&nbsp;{this.state.Nombre}
                </span>
              </Link>
            </li>
          )}
        </ul>
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    isFullScreen: state.reducer.isFullScreen,
    rtlLayout: state.reducer.rtlLayout,
    userId: state.firebase.auth.uid,
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFullScreen: () => dispatch({ type: actionTypes.FULL_SCREEN })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(windowSize(NavLeft));

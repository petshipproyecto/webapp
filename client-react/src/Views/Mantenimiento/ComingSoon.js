import React from "react";
import { NavLink } from "react-router-dom";

import "./../../assets/scss/style.scss";
import Aux from "../../hoc/_Aux";
import Breadcrumb from "../../App/layout/AdminLayout/Breadcrumb";

//---------------------------------------------------------------------

class ComingSoon extends React.Component {
  render() {
    return (
      <Aux>
        <div class="auth-wrapper offline">
          <div class="text-center">
            <h1 class="mb-4">COMING SOON</h1>
            <h5 class="text-muted mb-4">Esta pagina se esta desarrollando</h5>
            <a
              class="btn btn-primary mb-4 active"
              aria-current="page"
              href="/datta-able/react/default/"
            >
              <i class="feather icon-home"></i>Volver al inicio
            </a>
          </div>
        </div>
      </Aux>
    );
  }
}

export default ComingSoon;

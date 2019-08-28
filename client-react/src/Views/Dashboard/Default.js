import React from "react";
import { Row } from "react-bootstrap";
import Aux from "../../hoc/_Aux";
import WOW from "wowjs";
import logo from "../../assets/images/logoP.png";
import nombre from "../../assets/images/nombreP.png";


class Dashboard extends React.Component {
  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }
  render() {
    return (
      <Aux>
      <Row className=" justify-content-md-center">
        <div className="wow bounceIn">
          <img
            style={{
              maxHeight: 380,

              minHeight: 380
            }}
            src={logo}
          />
        </div>
      </Row>
      <Row className=" justify-content-md-center">
        <div className="wow slideInRight">
          <img src={nombre} />
        </div>
      </Row>
    </Aux>
    );
  }
}

export default Dashboard;

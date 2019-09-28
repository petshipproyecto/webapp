import React from "react";
import { Button, Modal, Col, Row, Container } from "react-bootstrap";
import Avatar1 from "../../assets/images/user/avatarDog.jpg";
import Avatar from "../../assets/images/user/avatarDog1.jpg";
const imagen = {
  minWidth: 140,
  maxHeight: 140,
  minHeight: 140,
  maxWidth: 140
};

class Match extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: props.modal };
  }
  componentWillReceiveProps(nextProps) {
    if (this.state.show !== nextProps.modal) {
      this.setState({ show: nextProps.modal });
    }
  }
  render() {
    let close = () => this.setState({ show: false });
    return (
      <div className="modal-container">
        <Modal
          show={this.state.show}
          onHide={close}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title style={{ margin: "auto" }} id="contained-modal-title ">
              &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Hay Cita!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <center>{/* <p>Lola y Firulai se dieron me gusta</p> */}</center>
            <center>
              <div class="row">
                <div class="col-sm-4">
                  <img
                    style={imagen}
                    className="img-radio"
                    src={Avatar}
                    alt="activity-user"
                  />
                  <br />
                  <p style={{ fontSize: 20 }}>Lola</p>
                </div>
                <div class="col-sm-4">
                  <i
                    style={{ fontSize: 100, color: "#f47386" }}
                    class="fa fa-heart"
                  ></i>
                </div>
                <div class="col-sm-4">
                  <img
                    style={imagen}
                    className="img-radio"
                    src={Avatar1}
                    alt="activity-user"
                  />
                  <br />
                  <p style={{ fontSize: 20 }}>Firulai </p>
                </div>
              </div>
            </center>
            <div class="row">
              <div class="col text-center">
                <a href="/TablaMascotas">
                  <button type="button" class="btn btn-outline-primary btn-lg">
                    <i class="feather icon-mail"></i>Enviar Email
                  </button>
                </a>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={close}>Cerrar</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Match;

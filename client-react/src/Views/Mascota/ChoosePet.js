import React from "react";

import "./../../assets/scss/style.scss";
import "./../../assets/scss/partials/pages/gallery.scss";
import Aux from "../../hoc/_Aux";
import { connect } from "react-redux";
import { Image, Figure, Container, Row, Col } from "react-bootstrap";
import axios from 'axios'
import avatar1 from "../../assets/images/user/avatarCat.jpg";
import avatar2 from "../../assets/images/user/avatarDog.jpg";
import avatar3 from "../../assets/images/user/avatarTortuga.jpg";
import avatar4 from "../../assets/images/user/avatarChinchilla.jpg";
import avatar5 from "../../assets/images/user/avatarHamster.jpg";
import "../../assets/scss/partials/theme-elements/choosePet.scss";
import { ClipLoader } from 'react-spinners';

class ChoosePet extends React.Component {
  state = {
    perfiles: [],
    loading: true
  };
  

  componentDidMount() {
    axios
      .get(
        "https://petshipback-dev.herokuapp.com/usuario/" + this.props.userId
      )
      .then(response => {
         
        this.setState({ perfiles: response.data.Perfils, loading: false });
      })
      .catch(e => { });
  };


  render() {
  
    return (
      <Aux>
        <div className="auth-wrapper aut-bg-img-new">
          <div class="content">
            <Container>
              <br></br>
              <Row>
              <div className='sweet-loading'>
        <ClipLoader
         
          sizeUnit={"px"}
          size={150}
          color={'#red'}
          loading={this.state.loading}
        />
      </div>
                {
                  
                  this.state.perfiles.map(element => {
                  return (<Col> 
                    <Figure class="effect-selena">
                      <a href="/dashboard/default">
                        <Image src={element.Imagen} className="imagen" />
                      </a>
                      <p>
                        <center>
                          <span> {element.Nombre}</span>
                        </center>
                      </p>
                    </Figure>
                  </Col>) 

                })
                }


                <Col className="col-centered">
                  <br />
                  <br />
                  <br />
                  <a href="/NewPet">
                    <button
                      type="button"
                      class="btn-icon btn-rounded btn btn-primary "
                    >
                      <i class="feather icon-plus"></i>
                    </button>
                  </a>
                  <p>
                    <center>Agregar Mascota</center>
                  </p>
                </Col>
              </Row>
              <br></br>
              <Row style={{ alignItems: "center" }}>
                <div class="col text-center">
                  <a href="/TablaMascotas">
                    <button
                      type="button"
                      class="btn btn-outline-primary btn-lg"
                    >
                      <i class="feather icon-settings"></i>Administrar Perfiles
                    </button>
                  </a>
                </div>
              </Row>
            </Container>
          </div>
        </div>
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  // console.log("pet profile" + JSON.stringify(state.firebase.auth.uid))
  return {
    userId: state.firebase.auth.uid,
    authError: state.auth.authError
  };
};
const mapDispatchToProps = dispatch => {

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChoosePet);

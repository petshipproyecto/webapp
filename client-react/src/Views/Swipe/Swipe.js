import React from "react";
import { Card, Badge } from "react-bootstrap";
import "../../assets/scss/partials/theme-elements/swipe.scss";
import Aux from "../../hoc/_Aux";
import like from "../../assets/images/user/si.png";
import notlike from "../../assets/images/user/no.png";
import "./../../assets/scss/partials/theme-elements/galeria.scss";

import MotionStack from "react-motion-stack";
import "react-motion-stack/build/motion-stack.css";

const data = Array.from({ length: 10 }, (_, i) => ({
  id: new Date().getTime() + i,
  element: (
    <Card className="tinderCard">
      <Card.Img className="cardBody"
        variant="top"
        draggable={false}
        src={`https://source.unsplash.com/collection/2489501/${i + 1}`}
      />
      <Card.Body className="cardBody">
        <center>
          <h3 class = "marg">
            <Badge className="badgeGaleria" pill variant="secondary">
              Tomi
            </Badge>
          </h3>
        </center>
        <Card.Text>
          <p className="pGaleria">
            <i class="fa fa-paw m-r-5"></i>
            <b>Raza:</b> Siames
          </p>
          <p className="pGaleria">
            <i class="fa fa-adjust m-r-5"></i>
            <b>Género:</b> Macho
          </p>
          <p className="pGaleria">
            <i class="fa fa-clock-o m-r-5"></i>
            <b>Edad:</b> 2 años
          </p>
          <p className="pGaleria">
            <i class="fa fa-map-marker mr-2" aria-hidden="true"></i>
            <b>Distancia:</b> 2 km
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}));

class Swipe extends React.Component {
  onSwipeEnd = ({ data }) => {
    // console.log("data", data);
  };
  
  renderButtons(props) {
    return (
      <div className="btn-group like">
        <button onClick={props.reject} data-toggle="tooltip" title="No me gusta">
          <img className="img-pequeña" src={notlike} />
        </button>      
        <span class="label label-default tt"> ~ Amistad  ~ </span>
        <button onClick={props.accept} data-toggle="tooltip" title="Me gusta">        
          <img className="img-pequeña" src={like} />
        </button>
      </div>      
    );
  }
  
  render() {
    return (
      <Aux>
        
        <MotionStack
          data={data}
          onSwipeEnd={this.onSwipeEnd}
          render={props => props.element}
          renderButtons={this.renderButtons}
        />
      </Aux>
    );
  }
}

export default Swipe;

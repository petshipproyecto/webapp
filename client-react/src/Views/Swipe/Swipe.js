import React from "react";
import { Row, Card } from "react-bootstrap";

import Aux from "../../hoc/_Aux";

//-----------Para la validacion importar estos elementos--------------
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
//---------------------------------------------------------------------

import { render } from "react-dom";
import MotionStack from "react-motion-stack";
import "react-motion-stack/build/motion-stack.css";
import "./index.css";

const dislikeStyle = {
 
};

const data = Array.from({ length: 10 }, (_, i) => ({
  id: new Date().getTime() + i,
  element: (

    
    <Card>
      <Card.Img
        variant="top"
        draggable={false}
        src={`https://source.unsplash.com/random/${i + 1}`}
      />
      <Card.Body>
        <h5>Michifu</h5>
        <Card.Text>Me gustaria jugar contigo.</Card.Text>
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
      <div className="btn-group">
        <button style={{dislikeStyle}}  onClick={props.reject}><i class="feather icon-x"></i></button>
        <button  onClick={props.accept}><i class="feather icon-heart"></i></button>
      </div>
    );
  }

  render() {
    return (
      <Aux>
        <Row className="justify-content-md-center">
          <div>
            <MotionStack
              data={data}
              onSwipeEnd={this.onSwipeEnd}
              render={props => props.element}
              renderButtons={this.renderButtons}
            />
          </div>
        </Row>
      </Aux>
    );
  }
}

export default Swipe;

import React from "react";
import {
  Row,
} from "react-bootstrap";

import Aux from "../../hoc/_Aux";




//-----------Para la validacion importar estos elementos--------------
import { Formik, Field, Form, ErrorMessage} from "formik";
import * as Yup from "yup";
//---------------------------------------------------------------------

import { render } from "react-dom";
import MotionStack from "react-motion-stack";
import "react-motion-stack/build/motion-stack.css";
import "./index.css";

const data = Array.from({ length: 10 }, (_, i) => ({
  id: new Date().getTime() + i,
  element: (
    <img
      draggable={false}
      src={`https://source.unsplash.com/random/${i + 1}`}
    />
  )
}));


class Swipe extends React.Component {
  
  onSwipeEnd = ({ data }) => {
   // console.log("data", data);
  };

  renderButtons(props) {
    return (
      <div className="btn-group">
        <button children="👎" onClick={props.reject} />
        <button children="👍" onClick={props.accept} />
      </div>
    );
  }
  render() {
    return (
          <Form>
            <Aux>
              <Row className="justify-content-md-center">
              <div >
              <MotionStack
          data={data}
          onSwipeEnd={this.onSwipeEnd}
          render={props => props.element}
          renderButtons={this.renderButtons}
        />
        </div>
              </Row>
            </Aux>
          </Form>
        )}
    
    
  }


export default Swipe;
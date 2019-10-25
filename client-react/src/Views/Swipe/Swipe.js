import React from "react";
import { Card, Badge } from "react-bootstrap";
import "../../assets/scss/partials/theme-elements/swipe.scss";
import Aux from "../../hoc/_Aux";
import like from "../../assets/images/user/si.png";
import notlike from "../../assets/images/user/no.png";
import "./../../assets/scss/partials/theme-elements/galeria.scss";

import MotionStack from "react-motion-stack";
import "react-motion-stack/build/motion-stack.css";
import axios from 'axios';
import SwipeCard from './SwipeCard';


const data = Array.from({ length: 10 }, (_, i) => ({
  id: new Date().getTime() + i,
  element: (
    <SwipeCard/>
  )
}));

class Swipe extends React.Component {
  onSwipeEnd = ({ data }) => {
    // console.log("data", data);
  };

  state = {
    cardElements : {
    
    }
  }
  componentDidMount(){
    axios.get('https://petshipback-dev.herokuapp.com/candidatos/5')
    .then(response =>{
      console.log(JSON.stringify(response.data));
      let aux = [];
      let cards = [];
      for(let i=0; i< i < response.data.length ; i++ ){
        // on the fly prepare cards
        aux.push(response.data[i]);

      }
      
    
      console.log(this.state);
    })
    .catch()
  }
  
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

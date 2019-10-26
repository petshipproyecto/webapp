import React from "react";
import { Card, Badge } from "react-bootstrap";
import "../../assets/scss/partials/theme-elements/swipe.scss";
import Aux from "../../hoc/_Aux";
import like from "../../assets/images/user/si.png";
import notlike from "../../assets/images/user/no.png";
import "./../../assets/scss/partials/theme-elements/galeria.scss";
import axios from 'axios'
import { connect } from "react-redux";
import MotionStack from "./swipeCard";
import "react-motion-stack/build/motion-stack.css";
import config from '../../config'
const swipeUtilities = require('./swipeUtilities').default;
var rutaApi = config.rutaApi



class Swipe extends React.Component {

  state = {
    aux : null
  }
  
  like = (id,tipoLike)=> {
    const url = rutaApi + tipoLike;
    const body = {
      Id_perfil_origen: 1,
      Id_perfil_destino:id,
      Id_tipo_match:1
    }
    axios.post(url,body)
    .then(r =>{console.log('liking')})
    .catch()
    
  }

  

  onBeforeSwipe = (swipe, direction, state,id) => {

    console.log('direction', direction);
    console.log('direction', id);
    //console.log('state', state);

    if (direction == 'left'){
      this.like(id,'dislike')
    } else {
      this.like(id,'like')
    }
    
 
    swipe();
    console.log('state', state);
  }
 


  onSwipeEnd = ({ data }) => {
    // console.log("data", data);
  };

  async componentDidMount(){   
    swipeUtilities.getPerfilActivo(this.props.userId).then((perfilActivo)=>{
      console.log('perfilAcivo' + JSON.stringify(perfilActivo));
      swipeUtilities.getCardDetails(perfilActivo.data.Id_perfil_activo).then(aux =>{
        console.log('aux' + aux);
       this.setState({aux: aux});
      });
      
    });
   
    
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

    let card = "";    
      if (this.state.aux){
        card= (
      <MotionStack
        data={this.state.aux}
        onSwipeEnd={this.onSwipeEnd}
        onBeforeSwipe={this.onBeforeSwipe}
        render={props => props.element}
        renderButtons={this.renderButtons}
      />)

      }      

    return ( 
      <Aux>
        
        {card}
        
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

export default connect(
  mapStateToProps
)(Swipe);
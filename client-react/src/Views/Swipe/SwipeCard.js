import React from "react";
import { Card, Badge } from "react-bootstrap";

class SwipeCard extends React.Component {

    render(){
        return(
        <Card className="tinderCard">
        <Card.Img className="cardBody"
          variant="top"
          draggable={false}
          src={`https://source.unsplash.com/collection/2489501/${1}`}
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
    }
}

export default SwipeCard;
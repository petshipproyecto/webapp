import React from "react";
import { Card, Badge } from "react-bootstrap";
import axios from 'axios'
import config from '../../config'
const rutaApi = config.rutaApi

const swipeUtilities = {

    getCardDetails: async function (idPerfil){
        const response = await axios.get(rutaApi +'candidatos/' + idPerfil);
        
          console.log(response.data);
          let aux = [];
          let cards = [];

          for(let i=0; i < response.data.length ; i++ ){
            // on the fly prepare cards
            console.log(response.data[i])
           aux.push({
            id: response.data[i].Id_perfil,
            element: (
              <Card className="tinderCard">
                <Card.Img className="cardBody"
                  variant="top"
                  draggable={false}
                  src={response.data[i].Imagen}
                />
                <Card.Body className="cardBody">
                  <center>
                    <h3 class = "marg">
                      <Badge className="badgeGaleria" pill variant="secondary">
                      {response.data[i].Nombre}
                      </Badge>
                    </h3>
                  </center>
                  <Card.Text>
                    <p className="pGaleria">
                      <i class="fa fa-paw m-r-5"></i>
                      <b>Raza:</b> {response.data[i].Raza.Animal.Descripcion}
                    </p>
                    <p className="pGaleria">
                      <i class="fa fa-adjust m-r-5"></i>
                      <b>Género:</b> {response.data[i].Id_genero == 1 ? 'Macho' : 'Hembra'}
                    </p>
                    <p className="pGaleria">
                      <i class="fa fa-clock-o m-r-5"></i>
                      <b>Edad:</b> {response.data[i].Edad} { response.data[i].Edad > 1 ? 'años' : 'año'}
                    </p>
                    {/*}
                    <p className="pGaleria">
                      <i class="fa fa-map-marker mr-2" aria-hidden="true"></i>
                      <b>Distancia:</b> 2 km
                    </p>
            */}
                  </Card.Text>
                </Card.Body>
              </Card>
            )
          });
    
          }
         
          return aux
    },
          

    getPerfilActivo:  async function (idUser){
        const perfilActivo = await axios.get(rutaApi + "usuario/" + idUser);
        return perfilActivo                 
    }
} 

export default swipeUtilities
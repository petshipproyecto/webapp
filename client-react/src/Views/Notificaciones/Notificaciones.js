import React from 'react';
import {Row, Col, Card, Table} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";

import Avatar1 from '../../assets/images/user/avatarDog.jpg';
import Avatar2 from '../../assets/images/user/avatar2.jpg';
import Avatar3 from '../../assets/images/user/avatar3.jpg';
import Avatar4 from '../../assets/images/user/avatar1.jpg';

class Notificaciones extends React.Component {
    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card className="Recent-Users">
                            <Card.Header>
                                <Card.Title as="h5">Notificaciones</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Table responsive hover>
                                <thead>
                                    <tr>
                                        <th>Mascota</th>
                                        <th>Nombre</th>
                                        <th>Usuario</th>
                                        <th>Nombre</th>
                                        <th>Fecha</th>
                                        <th>Hora </th>
                                        <th>Acciones</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        
                                    <tr>
                                    <td>
                                        <h6 class="m-0">
                                        <img className="media-object img-radius" src={Avatar1} alt="Generic placeholder"/>
                                        </h6>
                                        </td>
                                        <td>Lola</td>
                                    <td>
                                        <h6 class="m-0">
                                        <img className="media-object img-radius" src={Avatar2} alt="Generic placeholder"/>
                                        </h6>
                                        </td>
                                        <td>Juan</td>
                                        <td>10/05/2019</td>
                                        <td>10:50 AM</td>
                                        <td>
                                            <a class="text-white label theme-bg2 f-12" href="/PetProfile">Ver Información</a>
                                        </td>
                                    </tr>
                                    <tr>
                                    <td>
                                        <h6 class="m-0">
                                        <img className="media-object img-radius" src={Avatar1} alt="Generic placeholder"/>
                                        </h6>
                                        </td>
                                        <td>Lola</td>
                                    <td>
                                        <h6 class="m-0">
                                        <img className="media-object img-radius" src={Avatar4} alt="Generic placeholder"/>
                                        </h6>
                                        </td>
                                        <td>Juan</td>
                                       
                                        <td>10/05/2019</td>
                                        <td>10:50 AM</td>
                                        <td>
                                            <a class="text-white label theme-bg2 f-12" href="/PetProfile">Ver Información</a>
                                        </td>
                                    </tr>
                                    <tr>
                                    <td>
                                        <h6 class="m-0">
                                        <img className="media-object img-radius" src={Avatar1} alt="Generic placeholder"/>
                                        </h6>
                                        </td>
                                        <td>Lola</td>
                                    <td>
                                        <h6 class="m-0">
                                        <img className="media-object img-radius" src={Avatar3} alt="Generic placeholder"/>
                                        </h6>
                                        </td>
                                        <td>Juan</td>
                                        
                                        <td>10/05/2019</td>
                                        <td>10:50 AM</td>
                                        <td>
                                            <a class="text-white label theme-bg2 f-12" href="/PetProfile">Ver Información</a>
                                        </td>
                                    </tr>
                                    
                                    </tbody>
                                
                                    
                                
                                   
                                    
                                
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default Notificaciones;
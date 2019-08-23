import React from 'react';
import {Row, Col, Card, Table} from 'react-bootstrap';

import Aux from "../../../hoc/_Aux";

import Avatar1 from '../../../assets/images/user/avatarDog.jpg';
import Avatar2 from '../../../assets/images/user/avatarCat.jpg';
import Avatar3 from '../../../assets/images/user/avatarChinchilla.jpg';

class TablaMascotas extends React.Component {
    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Administrar Mascotas</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Table responsive hover>
                                    <thead>
                                    <tr>
                                        <th>Mascota</th>
                                        <th>Nombre</th>
                                        <th>Tipo de Animal</th>
                                        <th>Raza</th>
                                        <th>Genero</th>
                                        <th>Edad</th>
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
                                        <td>Perro</td>
                                        <td>Sin Raza</td>
                                        <td>Hembra</td>
                                        <td>3 años</td>
                                        <td>
                                            <a class="text-white label theme-bg2 f-12" href="/PetProfile">Editar</a>
                                            <a class="text-white label theme-bg f-12" href="#!">Eliminar</a>
                                        </td>
                                    </tr>
                                    <tr>
                                    <td>
                                        <h6 class="m-0">
                                        <img className="media-object img-radius" src={Avatar2} alt="Generic placeholder"/>
                                        </h6>
                                        </td>
                                        <td>Michu</td>
                                        <td>Gato</td>
                                        <td>Siames</td>
                                        <td>Hembra</td>
                                        <td>3 años</td>
                                        <td>
                                            <a class="text-white label theme-bg2 f-12" href="/PetProfile">Editar</a>
                                            <a class="text-white label theme-bg f-12" href="#!">Eliminar</a>
                                        </td>
                                       
                                    </tr>
                                    <tr>
                                    <td>
                                        <h6 class="m-0">
                                        <img className="media-object img-radius" src={Avatar3} alt="Generic placeholder"/>
                                        </h6>
                                        </td>
                                        <td>Rolando</td>
                                        <td>Hamster</td>
                                        <td>Sin raza</td>
                                        <td>Hembra</td>
                                        <td>1 años</td>
                                        <td>
                                            <a class="text-white label theme-bg2 f-12" href="/PetProfile">Editar</a>
                                            <a class="text-white label theme-bg f-12" href="#!">Eliminar</a>
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

export default TablaMascotas;
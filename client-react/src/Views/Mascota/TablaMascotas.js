import React from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
import axios from "axios";
import Aux from "../../hoc/_Aux";
import { connect } from "react-redux";
import Avatar1 from '../../assets/images/user/avatarDog.jpg';
import Avatar2 from '../../assets/images/user/avatarCat.jpg';
import Avatar3 from '../../assets/images/user/avatarChinchilla.jpg';

class TablaMascotas extends React.Component {
    state = {
        perfiles: [],
        razas: {},
        raza: ""
    }
    componentDidMount() {

        axios.get('https://petshipback-dev.herokuapp.com' + "/usuario/" + this.props.userId).then(response => {
            this.setState({
                perfiles: response.data.Perfils
            })
            console.log("state 1" + JSON.stringify(this.state))
        });

        axios.get('https://petshipback-dev.herokuapp.com' + "/raza").then(response => {
            let razas = {}
            console.log(response.data)

            for (var i = 0; i < response.data.length; i++) {
                razas[response.data[i].Id_raza] = response.data[i];

            }
            console.log(razas["1"]);
            this.setState({
                raza: razas,
                test: "hola"
            })
            console.log("state " + i +  JSON.stringify(this.state))
        });


    }

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
                                        {

                                            this.state.perfiles.map(element => {
                                                return (
                                                    <tr>
                                                        <td>
                                                            <h6 class="m-0">
                                                                <img className="media-object img-radius" src={element.Imagen || Avatar1} alt="Generic placeholder" />
                                                            </h6>
                                                        </td>
                                                        <td>{element.Nombre}</td>
                                                        <td>{this.state.raza[element.Id_raza] ? this.state.raza[element.Id_raza].Animal.Descripcion : ""}</td>
                                                        <td>{this.state.raza[element.Id_raza] ? this.state.raza[element.Id_raza].Descripcion : ""}</td>
                                                        <td>{this.state.Id_genero == "1" ? "Macho" : "Hembra"}</td>
                                                        <td>{element.Edad + " "} años</td>
                                                        <td>
                                                            <a class="text-white label theme-bg2 f-12" href="/PetProfile">Editar</a>
                                                            <a class="text-white label theme-bg f-12" href="#!">Eliminar</a>
                                                        </td>
                                                    </tr>

                                                )
                                            })
                                        }
                                           
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                        
                    </Col>
                </Row>
            </Aux >
        );
    }
}

const mapStateToProps = state => {
    //console.log("user profile" + JSON.stringify(state.firebase.auth.uid))
    return {
        userId: state.firebase.auth.uid,
        authError: state.auth.authError
    };
};

export default connect(mapStateToProps)(TablaMascotas);
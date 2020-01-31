import React, { Component } from "react";
import Dialog from "react-bootstrap-dialog";
import avatar1 from "../../../../../assets/images/user/avatarCat.jpg";
import Avatar2 from "../../../../../assets/images/user/avatarDog.jpg";
import Avatar3 from "../../../../../assets/images/user/avatarChinchilla.jpg";
import Avatar5 from "../../../../../assets/images/user/avatarDog.jpg";
import Avatar6 from "../../../../../assets/images/user/avatarDog1.jpg";
import { Row, Col, Card, Badge } from "react-bootstrap";


//--------Color de los iconos-------------------------
const colorEstrella = {color: "#f7bd0f"};
const colorCalendario ={color:"red"}
//----------------------------------------------------

const imagen = {
    minWidth: 140,
    maxHeight: 140,
    minHeight: 140,
    maxWidth: 140
};


class Notificacion extends React.Component {
    constructor(props) {
        super(props);
        this.onPareja = this.onPareja.bind(this);
        this.onAmistad = this.onAmistad.bind(this);
        this.targetProfile = props.info.Id_perfil === props.info.Match.Id_perfil_destino ? props.info.Match.Perfil_destino : this.props.info.Match.Perfil_origen;
    }
    mostrarPerfil(thiss,infoPerfil) {
        thiss.dialog.show({
            body: (
                <div>
                    <Card className="cardGaleria">
                        <Card.Img className="imagenGaleria" variant="top" src={infoPerfil.Imagen} />
                        <Card.Body>
                            <center>
                                <h3>
                                    <Badge className="badgeGaleria" pill variant="secondary">
                                        {infoPerfil.Nombre}
                    </Badge>
                                </h3>
                            </center>
                            <Card.Text>
                                <p className="pGaleria">
                                    <i class="fa fa-paw m-r-5"></i>
                                    <b>Raza:</b> {infoPerfil.Raza.Descripcion}
                  </p>
                                <p className="pGaleria">
                                    <i
                                        style={colorCalendario}
                                        class="fa fa-calendar m-r-5"
                                    ></i>
                                    <b>Edad:</b> {infoPerfil.Edad} años
                  </p>
                                <p className="pGaleria">
                                    <i
                                        style={colorEstrella}
                                        class="fa fa-star m-r-5"
                                    ></i>
                                    <b>{infoPerfil.Interes_pareja ? 'Le gustas como Pareja' : 'Le gustas como Amigo'}</b>
                                </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            ),
            actions: [ Dialog.OKAction()],
            bsSize: "small",
            onHide: dialog => {
                dialog.hide();
                console.log("closed by clicking background.");
            }
        })

    }
    //--------------------Mensaje para match de amistad-------------------------
    onAmistad(info,targetProfile) {
        this.dialog.show({
            body: (
                <div className="modal-container">
                    <center>
                        <p style={{ fontSize: 40 }}>Hay Amistad!!!</p>
                    </center>
                    <div class="d-flex justify-content-between">
                        <div>
                            <img
                                style={imagen}
                                className="img-radio"
                                src={info.Match.Perfil_origen.Imagen}
                                alt="activity-user"
                            />
                            <br />
                            <center>
                                <p style={{ fontSize: 20 }}>{info.Match.Perfil_origen.Nombre}</p>
                            </center>
                        </div>
                        <div>
                            <i
                                style={{ fontSize: 70, color: "#f47386" }}
                                class="fa fa-soccer-ball-o bounce"
                            ></i>
                        </div>
                        <div>
                        <img
                                style={imagen}
                                className="img-radio"
                                src={info.Match.Perfil_destino.Imagen}
                                alt="activity-user"
                            />
                            <br />
                            <center>
                                <p style={{ fontSize: 20 }}>{info.Match.Perfil_destino.Nombre}</p>
                            </center>
                        </div>
                    </div>
                   
                    <div class="row">
                        <div class="col text-center">
                            {/* Boton ver perfil de la mascota que hizo match */}
                            
                                <button type="button" class="btn btn-outline-primary btn-lg" onClick={()=> this.mostrarPerfil(this, targetProfile)}>
                                    <i class="feather icon-user"></i>
                                    &nbsp;&nbsp;Ver&nbsp;&nbsp;Perfil&nbsp;&nbsp;
                    </button>
                           
                            {/* Boton enviar email */}
                        </div>
                    </div>
                </div>
            ),
            actions: [Dialog.CancelAction(), Dialog.OKAction()],
            bsSize: "small",
            onHide: dialog => {
                dialog.hide();
                console.log("closed by clicking background.");
            }
        });
    }
    //--------------------/Mensaje para match de amistad-------------------------

    //--------------------Mensaje para match de pareja-------------------------
    onPareja(info,targetProfile) {
        this.dialog.show({
            body: (
                <div className="modal-container">
                    <center>
                        <p style={{ fontSize: 50 }}>Hay Cita !!! </p>
                    </center>
                    <div class="d-flex justify-content-between">
                        <div>
                            <img
                                style={imagen}
                                className="img-radio"
                                src={info.Match.Perfil_origen.Imagen}
                                alt="activity-user"
                            />
                            <br />
                            <center>
                                <p style={{ fontSize: 20 }}>{info.Match.Perfil_origen.Nombre}</p>
                            </center>
                        </div>
                        <div>
                            <p class="heart">
                                <i class="fa fa-heart fa-4x fa-beat"></i>
                            </p>
                        </div>
                        <div>
                            <img
                                style={imagen}
                                className="img-radio"
                                src={info.Match.Perfil_destino.Imagen}
                                alt="activity-user"
                            />
                            <br />
                            <center>
                                <p style={{ fontSize: 20 }}>{info.Match.Perfil_destino.Nombre}</p>
                            </center>
                        </div>
                    </div>
                    <div class="row">

                    </div>
                    <div class="row">
                        <div class="col text-center">
                            {/* Boton ver perfil de la mascota que hizo match */}
                               
                                <button type="button" class="btn btn-outline-primary btn-lg" onClick={()=> this.mostrarPerfil(this, targetProfile)}>
                                    <i class="feather icon-user"></i>
                                    &nbsp;&nbsp;Ver&nbsp;&nbsp;Perfil&nbsp;&nbsp;
                    </button>
                            
                            {/* Boton ver perfil de la mascota que hizo match */}
                        </div>
                    </div>
                </div>
            ),
            actions: [Dialog.CancelAction(), Dialog.OKAction()],
            bsSize: "small",
            onHide: dialog => {
                dialog.hide();
                console.log("closed by clicking background.");
            }
        });
    }
    //--------------------/Mensaje para match de pareja-------------------------

    differenceInMinutes(fechaComparar) {
        var fechaAnterior = new Date(fechaComparar);
        // today date
        var fechaActual = new Date();
        var millis = fechaActual - fechaAnterior;
        var minutes = Math.floor(millis / 60000);
        console.log(minutes + ' minutes')

        if (minutes > 3600) {
            return {
                valor: parseInt(minutes / 1440),
                escala: ' dias'
            }
        }

        if (minutes > 60) {
            return {
                valor: parseInt(minutes / 60),
                escala: ' hs'
            }
        }

        if (minutes <= 1) {
            return {
                valor: parseInt(minutes),
                escala: ' seg'
            }
        }

        return {
            valor: minutes,
            escala: 'min'
        }
    }

     




    render() {
        return (
            <div>
                <a style={{ cursor: "pointer" }} onClick={this.props.info.Match.Id_tipo_match == '1' ? () => this.onPareja(this.props.info, this.targetProfile) : () => this.onAmistad(this.props.info, this.targetProfile)}>
                    <li className="notification">
                        <div className="media">
                            <img
                                className="img-radius"
                                src={this.props.info.Id_perfil === this.props.info.Match.Id_perfil_destino ? this.props.info.Match.Perfil_destino.Imagen : this.props.info.Match.Perfil_origen.Imagen}
                                alt="Generic placeholder"
                            />
                            <div className="media-body">
                                <p>
                                    <strong> {this.props.info.Id_perfil === this.props.info.Match.Id_perfil_destino ? this.props.info.Match.Perfil_destino.Nombre : this.props.info.Match.Perfil_origen.Nombre} </strong>
                                    <span className="n-time text-muted">
                                        <i className="icon feather icon-clock m-r-10" />
                                        {this.differenceInMinutes(this.props.info.createdAt).valor} {this.differenceInMinutes(this.props.info.createdAt).escala}

                                    </span>
                                </p>
                                <p>Hizo match en tu perfil</p>
                            </div>
                        </div>
                    </li>
                </a>
                <Dialog
                    ref={component => {
                        this.dialog = component;
                    }}
                />
            </div>
        )
    }
}


export default Notificacion;
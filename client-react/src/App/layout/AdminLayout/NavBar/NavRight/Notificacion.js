import React, { Component } from "react";
import Dialog from "react-bootstrap-dialog";
import Avatar1 from "../../../../../assets/images/user/avatarCat.jpg";
import Avatar2 from "../../../../../assets/images/user/avatarDog.jpg";
import Avatar3 from "../../../../../assets/images/user/avatarChinchilla.jpg";
import Avatar5 from "../../../../../assets/images/user/avatarDog.jpg";
import Avatar6 from "../../../../../assets/images/user/avatarDog1.jpg";

const imagen = {
    minWidth: 140,
    maxHeight: 140,
    minHeight: 140,
    maxWidth: 140
};


class Notificacion extends React.Component {
    constructor() {
        super();
        this.onPareja = this.onPareja.bind(this);
        this.onAmistad = this.onAmistad.bind(this);
    }
    //--------------------Mensaje para match de amistad-------------------------
    onAmistad(info) {
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
                                src={Avatar6}
                                alt="activity-user"
                            />
                            <br />
                            <center>
                            <p style={{ fontSize: 20 }}>{info.Match.Perfil_origen.Nombre}</p>
                            </center>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col text-center">
                            {/* Boton enviar email */}
                            <a href="/TablaMascotas">
                                <button type="button" class="btn btn-outline-primary btn-lg">
                                    <i class="feather icon-mail"></i>Enviar Email
                    </button>
                            </a>
                            {/* Boton enviar email */}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col text-center">
                            {/* Boton ver perfil de la mascota que hizo match */}
                            <a href="/TablaMascotas">
                                <button type="button" class="btn btn-outline-primary btn-lg">
                                    <i class="feather icon-user"></i>
                                    &nbsp;&nbsp;Ver&nbsp;&nbsp;Perfil&nbsp;&nbsp;
                    </button>
                            </a>
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
    onPareja(info) {
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
                            <a href="/TablaMascotas">
                                <button type="button" class="btn btn-outline-primary btn-lg">
                                    <i class="feather icon-user"></i>
                                    &nbsp;&nbsp;Ver&nbsp;&nbsp;Perfil&nbsp;&nbsp;
                    </button>
                            </a>
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

        if (minutes > 3600){
            return {
                valor: parseInt(minutes / 1440),
                escala: ' dias'
            }
        }

        if (minutes > 60){
            return {
                valor: parseInt(minutes / 60),
                escala: ' hs'
            }
        }

        if (minutes <= 1){
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
                <a style={{ cursor: "pointer" }} onClick={this.props.info.Match.Id_tipo_match == '1' ? () => this.onPareja(this.props.info) : () => this.onAmistad(this.props.info) }>
                    <li className="notification">
                        <div className="media">
                            <img
                                className="img-radius"
                                src={this.props.info.Match.Perfil_destino.Imagen}
                                alt="Generic placeholder"
                            />
                            <div className="media-body">
                                <p>
                                    <strong> {this.props.info.Match.Perfil_destino.Nombre} </strong>
                                    <span className="n-time text-muted">
                                        <i className="icon feather icon-clock m-r-10" />
                                        {this.differenceInMinutes(this.props.info.createdAt).valor} { this.differenceInMinutes(this.props.info.createdAt).escala}
                                        
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
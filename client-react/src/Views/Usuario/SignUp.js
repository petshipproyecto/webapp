import React from "react";
import { NavLink } from "react-router-dom";
import { signUp } from "../../store/actions/user";
// react redux firebase auth - https://github.com/the-road-to-react-with-firebase/react-redux-firebase-authentication
import "./../../assets/scss/style.scss";
import Aux from "../../hoc/_Aux";
import Breadcrumb from "../../App/layout/AdminLayout/Breadcrumb";
//import DEMO from "../../../store/constant";
import axios from "axios";
import { connect } from "react-redux";
import { requestSignIn, signedIn } from "../../store/actions/user";
import { auth } from "../../store/firebase";
import { withRouter } from "react-router-dom";
import config from '../../config';
//-----------Para la validacion importar estos elementos--------------
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
//---------------------------------------------------------------------
import { SocialIcon } from "react-social-icons";
import ProvinciaSelect from './Select/selectProvincia'
import LocalidadSelect from './Select/selectLocalidad'

// Sweet Alert para los mensajes de exito y error
import swal from "sweetalert";
var rutaApi = config.rutaApi;

class SignUp extends React.Component {

  state = {
    provinciaSeleccionada: null, 
    Provincias: [],
    localidades: [],
    localidadSeleccionada: ""
  }

  componentDidMount() {  
    
    axios.get(rutaApi + "provincia" ).then(response => {
      this.setState({
        Provincias: response.data,
      });
      axios.get(rutaApi + "localidad/23").then(response => {
        //console.log(JSON.stringify(response.data));

        var localidades = response.data;
        console.log(localidades[0] + 'localidad')
        this.setState({
          localidades,
          provinciaSeleccionada: localidades[0],
          localidadSeleccionada: {
            "Id_localidad": "579"
          }
        });
        console.log(JSON.stringify(this.state.provinciaSeleccionada) + 'on mount')
      });       
    });
  }

  _handleChangeProvincia = e => {
    var provinciaSeleccionada = this.state.Provincias.find(
      Provincia => Provincia.Id_provincia === e,
      null
    );
    console.log(provinciaSeleccionada);
    console.log(JSON.stringify(e));

    // call to API and save
    
    axios.get(rutaApi + "localidad/" + provinciaSeleccionada.Id_provincia).then(response => {
      //console.log(JSON.stringify(response.data));
      var localidades = response.data;
      this.setState({
        localidades,
        provinciaSeleccionada
      });
      console.log('state' + JSON.stringify(this.state.provinciaSeleccionada))
    });  
  
    
  };

  _handleLocalidadChange = e => {
    var localidadSeleccionada = this.state.localidades.find(
      Localidad => Localidad.Id_localidad === e,
      null
    );
      this.setState({
        localidadSeleccionada
      });
     
  
    
  };
  render() {
    return (
      <Formik
        enableReinitialize
        initialValues={{
          firstName: "",
          lastName: "",
          ubicacion: "",
          email: "",
          password: ""
        }}
        validationSchema={Yup.object().shape({
          firstName: Yup.string()
            .trim()
            .min(2, "El nombre debe tener como mínimo 2 caracteres")
            .max(20, "El nombre debe tener como máximo 20 caracteres")
            .required("El nombre es obligatorio"),
          lastName: Yup.string()
            .trim()
            .min(2, "El nombre debe tener como mínimo 2 caracteres")
            .max(20, "El nombre debe tener como máximo 20 caracteres")
            .required("El apellido es obligatorio"),
          email: Yup.string()
            .email("El email tiene un formato invalido")
            .max(50, "Email debe tener como máximo 50 caracteres")
            .required("El email es obligatorio"),
          password: Yup.string()
            .min(6, "La contraseña debe tener al menos 6 caracteres")
            .max(20, "La contraseña debe tener como máximo 20 caracteres")
            .required("La contraseña es obligatoria")
        })}
        onSubmit={fields => {
          const { history } = this.props;
          const localidad = {Id_localidad: this.state.localidadSeleccionada.Id_localidad };
          const payload = {...fields, ...localidad }
          console.log(payload);
          this.props.signUp(payload); 
          console.log('this.state'+ JSON.stringify(this.state.localidadSeleccionada.Id_localidad))  
          
          //const { history } = this.props;
          //history.push("/dashboard");
          /*
          auth.doCreateUserWithEmailAndPassword(fields.email, fields.password).then(response => {
            alert(JSON.stringify(response))
            console.log(JSON.stringify(response)) */
          //alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
          /*
          axios.post('https://petshipt-backend.herokuapp.com/usuario', {           
              "Id_usuario": response.user.uid,
              "Email":fields.email,
              "Nombre": fields.firstName,
              "Apellido": fields.lastName,
              "Password": fields.password

          }).then(function (response) {
            // handle success
            //alert("SUCCESS!! :-)\n\n" + JSON.stringify(response))
            console.log(response);
           
          .catch(function (error) {
            // handle error
            //alert("ERROR!! :-(\n\n" + JSON.stringify(error))
            console.log(error);
          }) 

          } ).catch(e => alert(e)
            );
          */
        }}
        render={({ errors, status, touched }) => (
          <Form>
            <Aux>
              <Breadcrumb />
              <div className="auth-wrapper aut-bg-img">
                <div className="auth-content">
                  <div className="card">
                    <div className="card-body text-center">
                      <div className="mb-4">
                        <i className="feather icon-user-plus auth-icon" />
                      </div>
                      {/* <h3 className="mb-4">Registrarse con</h3>
                      <div className="form-group">
                        <SocialIcon
                          network="facebook"
                          url="http://facebook.com"
                          style={{ height: 32, width: 32 }}
                        />
                        &nbsp;&nbsp;
                        <SocialIcon
                          network="google"
                          url="http://google.com"
                          style={{ height: 32, width: 32 }}
                        />
                      </div> */}
                      <h7>
                        Todos los campos son obligatorios
                        <span style={{ color: "red" }}> *</span>
                      </h7>
                      <div className="form-group">
                        <Field
                          placeholder="Nombre"
                          name="firstName"
                          type="text"
                          className={
                            "form-control" +
                            (errors.firstName && touched.firstName
                              ? " is-invalid"
                              : "")
                          }
                        />
                        <ErrorMessage
                          name="firstName"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="form-group">
                        <Field
                          placeholder="Apellido"
                          name="lastName"
                          type="text"
                          className={
                            "form-control" +
                            (errors.lastName && touched.lastName
                              ? " is-invalid"
                              : "")
                          }
                        />
                        <ErrorMessage
                          name="lastName"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                     

                      <div className="form-group">
                        <Field
                          name="email"
                          placeholder="Email"
                          type="text"
                          className={
                            "form-control" +
                            (errors.email && touched.email ? " is-invalid" : "")
                          }
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="form-group">
                        <Field
                          placeholder="Contraseña"
                          name="password"
                          type="password"
                          className={
                            "form-control" +
                            (errors.password && touched.password
                              ? " is-invalid"
                              : "")
                          }
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
 
                       {/* Select Provincia */}
                 
                    <div class="form-group">
                    <label style={{textAlign: "left",display: "block"}}>Provincia</label>
                       <ProvinciaSelect
                      placeholder='Provincia'
                         className={errors.Provincia ? " is-invalid" : ""}
                         arrayOfData={this.state.Provincias}
                         name="Provincia"
                         onSelectChange={this._handleChangeProvincia}                         
                       />
                       <ErrorMessage
                         name="Provincia"
                         component="div"
                         className="invalid-feedback"
                       />
                     </div>

                     {/* Select Localidad */}
                     
                    <div class="form-group">
                    <label style={{textAlign: "left",display: "block"}}>Localidad</label>
                     <LocalidadSelect
                     placeholder='Localidad'
                       className={errors.Localidad ? " is-invalid" : ""}
                       arrayOfData={this.state.localidades}
                       onSelectChange={this._handleLocalidadChange}
                       
                     />
                     <ErrorMessage
                       name="Localidad"
                       component="div"
                       className="invalid-feedback"
                     />
                   </div>
                      <div className="form-group">
                        <button
                          type="submit"
                          className="btn btn-primary shadow-2 mb-4"
                        >
                          Registrarse
                        </button>
                      </div>
                      <p className="mb-0 text-muted">
                        Tiene una cuenta?{" "}
                        <NavLink to="/signIn">Iniciar Sesión</NavLink>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Aux>
          </Form>
        )}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: userData => dispatch(signUp(userData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
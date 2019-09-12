
import axios from 'axios'
import config from '../../config'

var rutaApi = config.rutaApi

export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
      const firebase = getFirebase();
      console.log(getState())
      
      firebase.auth().signInWithEmailAndPassword(
        credentials.email,
        credentials.password
      ).then((response) => {
        console.log(response)
        dispatch({ type: 'LOGIN_SUCCESS' });
      }).catch((err) => {
        dispatch({ type: 'LOGIN_ERROR', err });
      });
  
    }
  }
  
  export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
      const firebase = getFirebase();
  
      firebase.auth().signOut().then(() => {
        dispatch({ type: 'SIGNOUT_SUCCESS' })
      });
    }
  }
  
  export const signUp = (newUser) => {
      
    return (dispatch, getState, {getFirebase}) => {
      const firebase = getFirebase();
  
      firebase.auth().createUserWithEmailAndPassword(
        newUser.email, 
        newUser.password
      ).then(resp => {
        // Guarda la ubicación
        axios.post(rutaApi+'ubicacion',{
          Descripcion: newUser.ubicacion
        })
          .then(newUbicacion => {
            // Recupera la ubicación y la asigna al nuevo usuario
            axios.post(rutaApi+'usuario', {           
                "Usr_cod": resp.user.uid,
                "Nombre": newUser.firstName,
                "Apellido": newUser.lastName,
                "Id_ubicacion": newUbicacion.data.Id_ubicacion
            }).then(() => {
              dispatch({ type: 'SIGNUP_SUCCESS' });
            }).catch((err) => {
              dispatch({ type: 'SIGNUP_ERROR', err});
            });
          })
      })
    }
  }
  
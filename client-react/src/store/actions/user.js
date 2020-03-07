import { push } from 'react-router-redux'
import axios from 'axios'
import config from '../../config'

var rutaApi = config.rutaApi

export const signIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    //console.log(getState())

    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then((response) => {
      console.log(response.user)
      dispatch({ type: 'LOGIN_SUCCESS', usuario: response.user });
    }).catch((err) => {
      dispatch({ type: 'LOGIN_ERROR', err });
    });

  }
}

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase.auth().signOut().then(() => {

      dispatch({ type: 'SIGNOUT_SUCCESS' })
    });
  }
}

export  const signUp = (newUser) => {

  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    const resp = await firebase.auth().createUserWithEmailAndPassword( newUser.email,newUser.password);
    
    axios.post(rutaApi + 'usuario', {
      "Usr_cod": resp.user.uid,
      "Nombre": newUser.firstName,
      "Apellido": newUser.lastName,
      "Email": newUser.email,
      "Id_localidad": newUser.Id_localidad
    }).then(() => {
      dispatch({ type: 'SIGNUP_SUCCESS' });
    }).catch((err) => {
      dispatch({ type: 'SIGNUP_ERROR', err });
    });
        
    }
  
}

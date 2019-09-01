
import axios from 'axios'
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
        axios.post("https://petshipback-dev.herokuapp.com/ubicacion",{
          Descripcion: newUser.ubicacion
        })
          .then(newUbicacion => {
            // Recupera la ubicación y la asigna al nuevo usuario
            axios.post('https://petshipback-dev.herokuapp.com/usuario', {           
                "Usr_cod": resp.user.uid,
                "Email":newUser.email,
                "Nombre": newUser.firstName,
                "Apellido": newUser.lastName,
                "Password": newUser.password,
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
  
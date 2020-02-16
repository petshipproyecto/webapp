import firebase from 'firebase';
import 'firebase/auth';

// Replace this with your own config details
var config = {
    apiKey: "AIzaSyDS38ANm0LXvi-kRzo2eB15b4QoU_K5x24",
    authDomain: "petship-front.firebaseapp.com",
    databaseURL: "https://petship-front.firebaseio.com",
    projectId: "petship-front",
    storageBucket: "petship-front.appspot.com",
    messagingSenderId: "150350324526",
    appId: "1:150350324526:web:60dab6bd23d10dff"
  };
firebase.initializeApp(config);

export default firebase 
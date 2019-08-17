import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var config = {
  apiKey: "AIzaSyDS38ANm0LXvi-kRzo2eB15b4QoU_K5x24",
  authDomain: "petship-front.firebaseapp.com",
  databaseURL: "https://petship-front.firebaseio.com",
  projectId: "petship-front",
  storageBucket: "petship-front.appspot.com",
  messagingSenderId: "150350324526",
  appId: "1:150350324526:web:60dab6bd23d10dff"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};

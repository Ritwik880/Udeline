import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
let config = {
  // const firebaseConfig = {
  // Your firebase credentials
  apiKey: "AIzaSyDxRlYngAKh0Gjowrt1SBVAt605fI10RlM",
  authDomain: "react-contact-3acea.firebaseapp.com",
  projectId: "react-contact-3acea",
  storageBucket: "react-contact-3acea.appspot.com",
  messagingSenderId: "1624559223",
  appId: "1:1624559223:web:1bdbba55e8c2d7f908c072"
};
firebase.initializeApp(config)
var db = firebase.firestore();

export { db };

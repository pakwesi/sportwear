import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const config = {
    apiKey: "AIzaSyCv2rXV8G9JBIcPuVT113uEEdRYJh7-jjw",
    authDomain: "sportwear-db.firebaseapp.com",
    databaseURL: "https://sportwear-db.firebaseio.com",
    projectId: "sportwear-db",
    storageBucket: "sportwear-db.appspot.com",
    messagingSenderId: "606336543173",
    appId: "1:606336543173:web:7431360eeda4a4403d03ac",
    measurementId: "G-VZ9H4F9DNL"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;




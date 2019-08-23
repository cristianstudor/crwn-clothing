import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyD8XblQ6wlJpVIfZ9fuWPUyg5XB_qprHmI",
  authDomain: "crwn-db-9a751.firebaseapp.com",
  databaseURL: "https://crwn-db-9a751.firebaseio.com",
  projectId: "crwn-db-9a751",
  storageBucket: "",
  messagingSenderId: "384376328119",
  appId: "1:384376328119:web:5dec93ae1552cc4b"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
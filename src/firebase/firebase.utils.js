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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  
  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    
    try{
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      })
    } catch(err) {
      console.log('error creating user', err.message)
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
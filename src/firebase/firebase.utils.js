import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAMu4lZ3INNTbQorDua5O90fl_8LDdVT5Y",
  authDomain: "crwn-db-d40ea.firebaseapp.com",
  databaseURL: "https://crwn-db-d40ea.firebaseio.com",
  projectId: "crwn-db-d40ea",
  storageBucket: "crwn-db-d40ea.appspot.com",
  messagingSenderId: "596776344873",
  appId: "1:596776344873:web:93b45befb9094e1bfaeb38",
  measurementId: "G-6WRF5PVEER"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ 'prompt':'select_account' });
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
}

export default firebase;
import firebase from 'firebase/compat/app'
import "firebase/compat/firestore";
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCxn4O7_Ncg4ZaXRiPiiobZXYPvQ5IrTlQ",
  authDomain: "clone-7c185.firebaseapp.com",
  projectId: "clone-7c185",
  storageBucket: "clone-7c185.appspot.com",
  messagingSenderId: "969618390089",
  appId: "1:969618390089:web:ce62ff9c82393050f61398",
  measurementId: "G-38Z7LT7Y6Z"   
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };








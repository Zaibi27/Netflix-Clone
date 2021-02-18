import firebase from "firebase" ;

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMlu-lou22HUUSehMVqjo79OFgYpdUDfg",
  authDomain: "netflix-clone-ccc04.firebaseapp.com",
  projectId: "netflix-clone-ccc04",
  storageBucket: "netflix-clone-ccc04.appspot.com",
  messagingSenderId: "830038149479",
  appId: "1:830038149479:web:3cb035121deada794587c2",
  measurementId: "G-XS16RTBMNN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig) ;
const db = firebaseApp.firestore() ;

const auth = firebase.auth() ;

export {auth} ;
export default db ;
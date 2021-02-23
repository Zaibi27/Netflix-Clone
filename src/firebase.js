import firebase from "firebase" ;

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// paste the firebase config from the firebase SDK here
const firebaseConfig = {
 
};

const firebaseApp = firebase.initializeApp(firebaseConfig) ;
const db = firebaseApp.firestore() ;

const auth = firebase.auth() ;

export {auth} ;
export default db ;

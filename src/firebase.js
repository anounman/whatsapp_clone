import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDR7Yt5RPQYx0PBQAM-Z0VMGd70ujmLjlg",
    authDomain: "reactwpc.firebaseapp.com",
    projectId: "reactwpc",
    storageBucket: "reactwpc.appspot.com",
    messagingSenderId: "870471979660",
    appId: "1:870471979660:web:44c76704795b14e07961a9",
    measurementId: "G-WK7N642ERQ"
  };

const firebaseApp  = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export  {auth , provider};
export default db;
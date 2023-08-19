// import firebase from "firebase"; because of  version update command is not working below command work for version 10 firebase not for 8 version
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyANkrRht61CsNI6jte_I9-ulUjzMascfN4",
    authDomain: "clone-93420.firebaseapp.com",
    projectId: "clone-93420",
    storageBucket: "clone-93420.appspot.com",
    messagingSenderId: "717870907532",
    appId: "1:717870907532:web:9a560f9a943ba7b372fba9",
    measurementId: "G-ZZVML6HCGR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
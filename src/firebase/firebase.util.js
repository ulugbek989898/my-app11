import firebase  from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyDnDOdSMKRZOkPUp3vi7MW1E-zlPVDbDbQ",
        authDomain: "my-app3-adfd9.firebaseapp.com",
        databaseURL: "https://my-app3-adfd9.firebaseio.com",
        projectId: "my-app3-adfd9",
        storageBucket: "my-app3-adfd9.appspot.com",
        messagingSenderId: "861837958484",
        appId: "1:861837958484:web:591cb95218d97b31aebcc1",
        measurementId: "G-T2GJVNRYF2"
};

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider  = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
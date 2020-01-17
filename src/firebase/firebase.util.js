import firebase  from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyA_lbg3tiZf13rdVZIoBxPbBSB1urr8iVY",
        authDomain: "my-app3-953eb.firebaseapp.com",
        databaseURL: "https://my-app3-953eb.firebaseio.com",
        projectId: "my-app3-953eb",
        storageBucket: "my-app3-953eb.appspot.com",
        messagingSenderId: "569941233167",
        appId: "1:569941233167:web:a886cb110f7f89ab1b9d7a",
        measurementId: "G-W9DNYND7GS"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) =>{
        if (!userAuth) return ;

        const userRef = firestore.doc(`users/${userAuth.uid}`);
        const snapShot = await userRef.get();

        if (!snapShot.exists) {
                const {displayName, email} = userAuth;
                const createdAt = new Date();
          try {
                      await userRef.set({
                            displayName,
                              email,
                              createdAt,
                              ...additionalData
                       })
                }
                catch (error) {
                       console.log('error creating user' , error.message);
                 }
         }
          return userRef;

}


export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider  = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
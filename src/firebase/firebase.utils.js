import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAha3Ja4cN2VI5baNwp7rt7P7wjpGyYDk4",
    authDomain: "shop-db-c4cdb.firebaseapp.com",
    databaseURL: "https://shop-db-c4cdb.firebaseio.com",
    projectId: "shop-db-c4cdb",
    storageBucket: "shop-db-c4cdb.appspot.com",
    messagingSenderId: "329343036690",
    appId: "1:329343036690:web:2e9ccb2d41fdf730e017cb",
    measurementId: "G-12WEHVT640"
};

export const createUserProfileDocument = async (userAuth, AdditionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exist) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...AdditionalData,
            })
        } catch (error) {
            console.log('errror creating user', error.message);
        }

    };

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyCK26AWlrchSCzKL6X_Gxi2PR27PnOQCX4',
  authDomain: 'custom-hooks-16027.firebaseapp.com',
  databaseURL:
    'https://custom-hooks-16027-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'custom-hooks-16027',
  storageBucket: 'custom-hooks-16027.appspot.com',
  messagingSenderId: '497578878676',
  appId: '1:497578878676:web:cb1606bc907d48107cbd41',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

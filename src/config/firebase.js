import {initializeApp} from 'firebase/app';
import {getFirestore, collection} from 'firebase/firestore';

export const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
    appId: process.env.REACT_APP_APP_ID,
};

initializeApp(firebaseConfig);

export const db = getFirestore();

export const doc = collection(db, 'redux-test');
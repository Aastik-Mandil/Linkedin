import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDmqCfNqeHt4Ti7A3EZymbxCoSGM5Z4M_4",
    authDomain: "linkedin-c7bb2.firebaseapp.com",
    projectId: "linkedin-c7bb2",
    storageBucket: "linkedin-c7bb2.appspot.com",
    messagingSenderId: "102367575289",
    appId: "1:102367575289:web:da1ea64fe43f4b15233628",
    measurementId: "G-N523ZY84PV"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();

export { db, auth };
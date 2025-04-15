import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDMMklpu9zNXKJq2tS5qkWUKVMWJ82fLZ4",
    authDomain: "tinder-hashout.firebaseapp.com",
    projectId: "tinder-hashout",
    storageBucket: "tinder-hashout.firebasestorage.app",
    messagingSenderId: "308478072241",
    appId: "1:308478072241:web:bc103f000555cb07bf5990"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

export default db
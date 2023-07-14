// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyByzEe_77iNPEZtsuXENkYBrm0mKB5raLk",
    authDomain: "blackbox-ai-a6717.firebaseapp.com",
    projectId: "blackbox-ai-a6717",
    storageBucket: "blackbox-ai-a6717.appspot.com",
    messagingSenderId: "248824507529",
    appId: "1:248824507529:web:4600f20c51f576c806ea58",
    measurementId: "G-Z7V17BS3B7"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export { db };
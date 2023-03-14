// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCF1bNZwwZipaKot9PzytolDHpkBn_BtyQ",
    authDomain: "an-3-e2419.firebaseapp.com",
    projectId: "an-3-e2419",
    storageBucket: "an-3-e2419.appspot.com",
    messagingSenderId: "751869508669",
    appId: "1:751869508669:web:99c66b706a403be60f7e54",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const fire = firebase.initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage();

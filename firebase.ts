// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtHpULKCU06TN7v8ZriFXtxIV9y889MKk",
  authDomain: "netflix-typescript-clone.firebaseapp.com",
  projectId: "netflix-typescript-clone",
  storageBucket: "netflix-typescript-clone.appspot.com",
  messagingSenderId: "525690165352",
  appId: "1:525690165352:web:d548d41fe889b159b983dd"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app
export {auth,db}    
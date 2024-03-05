// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqHTyFLdGZQMsbWlPWgUq0D823rXpPHzM",
  authDomain: "socialapp-99cc7.firebaseapp.com",
  projectId: "socialapp-99cc7",
  storageBucket: "socialapp-99cc7.appspot.com",
  messagingSenderId: "551770381872",
  appId: "1:551770381872:web:c9106f3bd0b69f71ed17f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export const db = getFirestore(app)

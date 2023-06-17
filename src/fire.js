// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBzEcH68TIZZk9BHn0SwcIAtjk0Br2VlcI",
  authDomain: "biblio-e4b62.firebaseapp.com",
  projectId: "biblio-e4b62",
  storageBucket: "biblio-e4b62.appspot.com",
  messagingSenderId: "252744919493",
  appId: "1:252744919493:web:098049b6fe8d114cc103ac",
  measurementId: "G-KFYV15T4BB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const store = getStorage(app);

export {auth,db,store,app}

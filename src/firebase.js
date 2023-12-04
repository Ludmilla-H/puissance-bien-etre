// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore" ;
import { getStorage } from 'firebase/storage' ;
import {getAuth} from "firebase/auth" ;


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNrxmWhZkRJpvpkQ28S2ODt0zxZbc2r6w",
  authDomain: "puissance-bien-etre.firebaseapp.com",
  projectId: "puissance-bien-etre",
  storageBucket: "puissance-bien-etre.appspot.com",
  messagingSenderId: "982308697716",
  appId: "1:982308697716:web:a8a2ea3f0aab194931c321"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize dbFirestore
export const dbFirestore = getFirestore(app) ;


// Initialize Firebase Auth
export const auth = getAuth(app);

//init storage
export const storage = getStorage(app) ;


export default app;


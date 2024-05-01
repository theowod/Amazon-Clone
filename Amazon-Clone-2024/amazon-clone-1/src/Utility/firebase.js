import firebase from "firebase/compat/app";
import {getAuth} from  'firebase/auth';
import "firebase/compat/firestore";
import "firebase/compat/auth";
// Add other Firebase services that you're using

const firebaseConfig = {
  apiKey: "AIzaSyBxmzkqdqCEsaEhvjh5dh0Zv7oSSPEodxg",
  authDomain: "clone-2024-52d0c.firebaseapp.com",
  projectId: "clone-2024-52d0c",
  storageBucket: "clone-2024-52d0c.appspot.com",
  messagingSenderId: "495598147511",
  appId: "1:495598147511:web:d2d2896b51ab8b4590ba32"
};

// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db =  app.firestore();

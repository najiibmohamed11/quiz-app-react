import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider}from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBqn3uNGOv84C0yM4azG-Tl7GTLuG9o7m4",
  authDomain: "quiz-app-60fdf.firebaseapp.com",
  projectId: "quiz-app-60fdf",
  storageBucket: "quiz-app-60fdf.appspot.com",
  messagingSenderId: "390655034490",
  appId: "1:390655034490:web:ce0d93b32528765739a7c3"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider=new GoogleAuthProvider()
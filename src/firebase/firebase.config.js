// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPXMz8RYUOn3yPiXZh7aCnm-6b2BuRyio",
  authDomain: "auth-routing-context.firebaseapp.com",
  projectId: "auth-routing-context",
  storageBucket: "auth-routing-context.appspot.com",
  messagingSenderId: "662714786040",
  appId: "1:662714786040:web:6c1540425240a09c839b0d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

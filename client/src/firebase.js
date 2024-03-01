// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-blog-e8d5e.firebaseapp.com",
    projectId: "mern-blog-e8d5e",
    storageBucket: "mern-blog-e8d5e.appspot.com",
    messagingSenderId: "993677834486",
    appId: "1:993677834486:web:7ea9703397a111977094d7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


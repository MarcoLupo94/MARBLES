// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { auth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBxHsoLMMMy0AGSHyFr1n2jr4dY91M5xls",
    authDomain: "legacy-marbles.firebaseapp.com",
    projectId: "legacy-marbles",
    storageBucket: "legacy-marbles.appspot.com",
    messagingSenderId: "151535497928",
    appId: "1:151535497928:web:b15197d05bf9f557912bfd",
    measurementId: "G-6CNRB0CHH5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
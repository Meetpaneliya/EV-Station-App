// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrWxwuEqOfZO1tzD3YxJ2aQa6X9cMKZaE",
  authDomain: "ev-charging-station-6e07b.firebaseapp.com",
  projectId: "ev-charging-station-6e07b",
  storageBucket: "ev-charging-station-6e07b.appspot.com",
  messagingSenderId: "723503936028",
  appId: "1:723503936028:web:5fb1f67a72eb3bdee825d9",
  measurementId: "G-ETDQZVT1H4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

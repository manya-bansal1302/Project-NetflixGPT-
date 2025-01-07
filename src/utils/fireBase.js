// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAze4SwwyuyMzDl_IukaT-CJzZtR39O4eE",
  authDomain: "netflixgpt-7dba4.firebaseapp.com",
  projectId: "netflixgpt-7dba4",
  storageBucket: "netflixgpt-7dba4.firebasestorage.app",
  messagingSenderId: "107719055363",
  appId: "1:107719055363:web:9a3beacdd3795a6ca49636",
  measurementId: "G-02L45LXX1P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
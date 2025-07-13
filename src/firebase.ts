// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcp7RJX_wectxiRtkurHza0xu4x2UTE-Q",
  authDomain: "mmbmrecords-a8b45.firebaseapp.com",
  projectId: "mmbmrecords-a8b45",
  storageBucket: "mmbmrecords-a8b45.firebasestorage.app",
  messagingSenderId: "599551869849",
  appId: "1:599551869849:web:1a53290336f13e7a870908",
  measurementId: "G-T889BKX8E7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

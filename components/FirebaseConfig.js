// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, getFirstore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxmXCrtvGnTBmzUqKkBAnUc_1gWV53pdg",
  authDomain: "cloudlyapp-5824a.firebaseapp.com",
  projectId: "cloudlyapp-5824a",
  storageBucket: "cloudlyapp-5824a.appspot.com",
  messagingSenderId: "437727229200",
  appId: "1:437727229200:web:5cb2add7a1e874face2195",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);

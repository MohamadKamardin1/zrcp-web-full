// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDbOzNV5OzK6pUprhGPPf1w591viZU3RVw",
  authDomain: "zrcp-c6927.firebaseapp.com",
  projectId: "zrcp-c6927",
  storageBucket: "zrcp-c6927.firebasestorage.app",
  messagingSenderId: "385683553137",
  appId: "1:385683553137:web:47575046d66c24b81d94d0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
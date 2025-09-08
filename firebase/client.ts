
import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDCmq_u4kCpNoJDdRo1-Z4KSBYiGP664ZI",
  authDomain: "prepwise-3c646.firebaseapp.com",
  projectId: "prepwise-3c646",
  storageBucket: "prepwise-3c646.firebasestorage.app",
  messagingSenderId: "526497452257",
  appId: "1:526497452257:web:e7608d40f624597c3c67a0",
  measurementId: "G-FK78364XGQ"
};

// Initialize Firebase
const app = !getApps.length? initializeApp(firebaseConfig):getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
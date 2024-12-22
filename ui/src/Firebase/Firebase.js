import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCpReOLUkKuN0IcRi7--VRwh-UkcMtLBL8",
  authDomain: "surge-31499.firebaseapp.com",
  projectId: "surge-31499",
  storageBucket: "surge-31499.firebasestorage.app",
  messagingSenderId: "169325773975",
  appId: "1:169325773975:web:9447304d6ce78dfd6b15d2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
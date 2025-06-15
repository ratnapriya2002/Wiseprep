// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkxTdF9bwcoRH6CaIPZLhL0Ri3S-uPS-E",
  authDomain: "prepwise-afdd9.firebaseapp.com",
  projectId: "prepwise-afdd9",
  storageBucket: "prepwise-afdd9.firebasestorage.app",
  messagingSenderId: "206459048115",
  appId: "1:206459048115:web:d5103452a6353f5726e0c6",
  measurementId: "G-57JVQ144GG"
};
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);

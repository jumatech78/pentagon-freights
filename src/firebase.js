// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import {getFunctions} from 'firebase/functions'

import { getAnalytics } from "firebase/analytics";
import { getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDq3Q2WZOhWd0ofFs5uKCBpt3kAzKBEWAE",
  authDomain: "pentagon-11200.firebaseapp.com",
  projectId: "pentagon-11200",
  storageBucket: "pentagon-11200.appspot.com",
  messagingSenderId: "596590493272",
  appId: "1:596590493272:web:52fc21d2c11bfbc46c142d",
  measurementId: "G-KTXD4SL09X"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig):getApp();
const db = getFirestore(app)
const auth =  getAuth(app)
const firebaseFunctions = getFunctions(app)

export {app,db,auth,firebaseFunctions}

import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB-4HEc_kbeXiNNBQIEKsWywAAhAB7lnP4",
  authDomain: "anchor-42108.firebaseapp.com",
  projectId: "anchor-42108",
  storageBucket: "anchor-42108.appspot.com",
  messagingSenderId: "46295357502",
  appId: "1:46295357502:web:e4e0c1056c255c1e07596f",
  measurementId: "G-X0TRET045F"
  };
  

const app = initializeApp(firebaseConfig);
export const database = getAuth(app)
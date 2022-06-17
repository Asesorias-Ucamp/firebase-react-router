import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "API-KEY",
  authDomain: "******.firebaseapp.com",
  projectId: "*********",
  storageBucket: "*********",
  messagingSenderId: "********",
  appId: "ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}
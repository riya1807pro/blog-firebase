// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANWUzxyDL2caw5YZrBXr59OvjamqVIfWY",
  authDomain: "blooging-7b385.firebaseapp.com",
  projectId: "project-99281887966",
  databaseUrl: "https://blooging-7b385-default-rtdb.firebaseio.com/",
  storageBucket: "blooging-7b385.firebasestorage.app",
  messagingSenderId: "99281887966",
  appId: "1:99281887966:web:c951844b18446a5147984f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const storage = getStorage(app);

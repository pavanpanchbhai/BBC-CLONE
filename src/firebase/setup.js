import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD97YrC5TTRTspHBH5q9wVrAZGpzAukUUo",
  authDomain: "news-app-48f46.firebaseapp.com",
  projectId: "news-app-48f46",
  storageBucket: "news-app-48f46.appspot.com",
  messagingSenderId: "275705554111",
  appId: "1:275705554111:web:f6b572a52231b4f174120a",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(app);
export const database = getFirestore(app);

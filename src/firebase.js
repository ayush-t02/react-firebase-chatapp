import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAC-GjzpwdfYwXJfSwV-IuBz31k9ZhulHQ",
  authDomain: "realtime-chat-4a927.firebaseapp.com",
  projectId: "realtime-chat-4a927",
  storageBucket: "realtime-chat-4a927.appspot.com",
  messagingSenderId: "219053074613",
  appId: "1:219053074613:web:8ac38ee1d8978d21eb36fc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

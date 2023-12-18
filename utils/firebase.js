import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "blog-application-559b9.firebaseapp.com",
  projectId: "blog-application-559b9",
  storageBucket: "blog-application-559b9.appspot.com",
  messagingSenderId: "777867422920",
  appId: "1:777867422920:web:dc3c48575f48ca9648c9fd",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage();

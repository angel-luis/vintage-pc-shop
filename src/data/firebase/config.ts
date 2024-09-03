import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// This API key is only an identifier, is safe to share
const firebaseConfig = {
  apiKey: "AIzaSyCzBcvegKqBk_G7o8eh3v1qGBakrVBBP3c",
  authDomain: "vintage-pc-shop.firebaseapp.com",
  projectId: "vintage-pc-shop",
  storageBucket: "vintage-pc-shop.appspot.com",
  messagingSenderId: "1086281474732",
  appId: "1:1086281474732:web:e38ebb9eea816febb27509",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth();

export const provider = new GoogleAuthProvider();

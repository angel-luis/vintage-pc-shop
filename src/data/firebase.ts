import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  User,
} from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

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

const db = getFirestore(app);

export const provider = new GoogleAuthProvider();

async function addUser(user: User) {
  const docRef = doc(db, "users", user.uid);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    await setDoc(docRef, {
      name: user.displayName,
      email: user.email,
      createdAt: new Date(),
    });
  }
}

export async function handleSignInGoogle() {
  try {
    const auth = getAuth();
    const result = await signInWithPopup(auth, provider);
    //const credential = GoogleAuthProvider.credentialFromResult(result);
    //const token = credential?.accessToken;
    const user = result.user as User;
    addUser(user);
  } catch (error) {
    console.log("error", error);
  }
}

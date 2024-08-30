import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

import { AuthResult } from "@/lib/definitions";

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

const auth = getAuth();

export const provider = new GoogleAuthProvider();

async function addUser(user: User, displayName?: string) {
  const docRef = doc(db, "users", user.uid);
  const docSnap = await getDoc(docRef);

  try {
    if (!docSnap.exists()) {
      await setDoc(docRef, {
        name: user.displayName || displayName,
        email: user.email,
        createdAt: new Date(),
      });
    }
  } catch (error) {
    console.log("error", error);
  }
}

export async function handleSignInGoogle() {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user as User;
    await addUser(user);
    return { sucess: true };
  } catch (error) {
    console.log("error", error);
    return { sucess: false, error };
  }
}

export async function handleEmailAuth(
  action: "signIn" | "signUp",
  email: string,
  password: string,
  displayName?: string
): Promise<AuthResult> {
  try {
    if (action === "signUp") {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = result.user as User;

      await addUser(user, displayName);

      return { success: true, error: null };
    } else {
      await signInWithEmailAndPassword(auth, email, password);

      return { success: true, error: null };
    }
  } catch (error) {
    console.log("error", error);
    if (error && typeof error === "object" && "code" in error) {
      return { success: false, error: error as { code: string } };
    }

    return { success: false, error: { code: "unknown-error" } };
  }
}

export function observeAuthChange(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback);
}

export async function handleSignOut() {
  await signOut(auth);
}

import {
    createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup,
    signOut, User
} from "firebase/auth";

import { auth, provider } from "@/data/firebase/config";
import { addUser } from "@/data/firebase/firestore";
import { AuthResult } from "@/lib/definitions";

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

import { User } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

import { db } from "@/data/firebase/config";

export async function addUser(user: User, displayName?: string) {
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

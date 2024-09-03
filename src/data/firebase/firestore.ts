import { User } from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  writeBatch,
} from "firebase/firestore";

import { db } from "@/data/firebase/config";
import ProductsData from "@/data/products-upload.json";
import { Product } from "@/lib/definitions";

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

export async function addProducts() {
  const batch = writeBatch(db);

  ProductsData.forEach((product: Product) => {
    const docRef = doc(db, "products", product.slug);
    batch.set(docRef, product);
  });

  try {
    await batch.commit();
  } catch (error) {
    console.log("error", error);
  }
}

export async function getProducts() {
  const q = query(collection(db, "products"));
  const querySnapshot = await getDocs(q);

  const products: Product[] = [];

  querySnapshot.forEach((doc) => {
    products.push(doc.data() as Product);
  });

  return products;
}

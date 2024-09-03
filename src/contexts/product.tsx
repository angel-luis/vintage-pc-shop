import { createContext, useEffect, useState } from "react";

//import { addProducts } from "@/data/firebase";
import { getProducts } from "@/data/firebase";
import { Product } from "@/lib/definitions";

export const ProductContext = createContext([] as Product[]);

export function ProductContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Uncomment this for upload products
    // Remember to add the write rule in Firebase
    /* (async () => {
      await addProducts();
    })(); */

    (async () => {
      const products = await getProducts();
      setProducts(products);
    })();
  }, []);

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
}

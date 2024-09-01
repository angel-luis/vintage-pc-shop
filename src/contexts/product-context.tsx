import { createContext, useEffect, useState } from "react";

import ProductData from "@/data/products-mockup.json";
import { Product } from "@/lib/definitions";

export const ProductContext = createContext([] as Product[]);

export function ProductContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(ProductData);
  }, []);

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
}

import { createContext, useState } from "react";

import { Product } from "@/lib/definitions";

type CartContextType = {
  cartProducts: Product[];
  setCartProducts: React.Dispatch<React.SetStateAction<Product[]>> | null;
};

export const CartContext = createContext<CartContextType>({
  cartProducts: [],
  setCartProducts: null,
});

export function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  const providerValue = { cartProducts, setCartProducts };

  return (
    <CartContext.Provider value={providerValue}>
      {children}
    </CartContext.Provider>
  );
}

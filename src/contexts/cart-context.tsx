import { createContext, useState } from "react";

import { ProductCart } from "@/lib/definitions";

type CartContextType = {
  cartProducts: ProductCart[];
  setCartProducts: React.Dispatch<React.SetStateAction<ProductCart[]>> | null;
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
  const [cartProducts, setCartProducts] = useState<ProductCart[]>([]);
  const providerValue = { cartProducts, setCartProducts };

  return (
    <CartContext.Provider value={providerValue}>
      {children}
    </CartContext.Provider>
  );
}

import { createContext, useReducer } from "react";

import { CartAction, CartContextType, CartState } from "@/lib/definitions";

export const CartContext = createContext<CartContextType>(
  {} as CartContextType
);

function cartReducer(state: CartState, action: CartAction) {
  switch (action.type) {
    case "UPDATE_CART_PRODUCTS":
      return { ...state, cartProducts: action.payload };
    case "TOOGLE_DRAWER":
      return { ...state, isDrawerOpen: action.payload };
    default:
      throw new Error(`Not a valid cart action! <See contexts/cart.tsx>`);
  }
}

export function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cartState, cartDispatcher] = useReducer(cartReducer, {
    cartProducts: [],
    isDrawerOpen: false,
  });

  const providerValue: CartContextType = {
    cartState,
    cartDispatcher,
  };

  return (
    <CartContext.Provider value={providerValue}>
      {children}
    </CartContext.Provider>
  );
}

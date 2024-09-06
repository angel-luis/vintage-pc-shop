import { useContext } from "react";

import { CartContext } from "@/contexts/cart";
import { handleAddToCart, handleRemoveFromCart, handleUpdateQuantity } from "@/lib/cart-utils";
import { Product, ProductQuantityAction } from "@/lib/definitions";

export default function useCartActions() {
  const cartContext = useContext(CartContext);
  if (!cartContext)
    throw new Error("Can't use this hook outside CartProvider!");

  const { cartState, cartDispatcher } = cartContext;
  const { cartProducts } = cartState;

  function addToCart(product: Product) {
    const newCartProducts = handleAddToCart(cartProducts, product);
    cartDispatcher({ type: "UPDATE_CART_PRODUCTS", payload: newCartProducts });
    cartDispatcher({ type: "TOOGLE_DRAWER", payload: true });
  }

  function removeFromCart(product: Product) {
    const newCartProducts = handleRemoveFromCart(cartProducts, product);
    cartDispatcher({ type: "UPDATE_CART_PRODUCTS", payload: newCartProducts });
  }

  function updateQuantity(product: Product, action: ProductQuantityAction) {
    const newCartProducts = handleUpdateQuantity(cartProducts, product, action);
    cartDispatcher({ type: "UPDATE_CART_PRODUCTS", payload: newCartProducts });
  }

  return { addToCart, removeFromCart, updateQuantity };
}

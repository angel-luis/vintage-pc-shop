import { useDispatch, useSelector } from "react-redux";

import { handleAddToCart, handleRemoveFromCart, handleUpdateQuantity } from "@/lib/cart-utils";
import { Product, ProductQuantityAction } from "@/lib/definitions";
import { getCartProducts, getIsDrawerOpen } from "@/store/cart/selector";
import { setDrawerOpen, updateCartProducts } from "@/store/cart/slice";

export default function useCartActions() {
  const cartProducts = useSelector(getCartProducts);
  const isDrawerOpen = useSelector(getIsDrawerOpen);
  const dispatch = useDispatch();

  function addToCart(product: Product) {
    const newCartProducts = handleAddToCart(cartProducts, product);
    dispatch(updateCartProducts(newCartProducts));
    dispatch(setDrawerOpen(true));
  }

  function removeFromCart(product: Product) {
    const newCartProducts = handleRemoveFromCart(cartProducts, product);
    dispatch(updateCartProducts(newCartProducts));
  }

  function updateQuantity(product: Product, action: ProductQuantityAction) {
    const newCartProducts = handleUpdateQuantity(cartProducts, product, action);
    dispatch(updateCartProducts(newCartProducts));
  }

  function toggleDrawer() {
    dispatch(setDrawerOpen(!isDrawerOpen));
  }

  return { addToCart, removeFromCart, updateQuantity, toggleDrawer };
}

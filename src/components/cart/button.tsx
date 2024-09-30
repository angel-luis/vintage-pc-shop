import { useContext } from "react";

import Button from "@/components/common/button";
import { CartContext } from "@/contexts/cart";
import useCartActions from "@/hooks/useCartActions";
import { CartContextType } from "@/lib/definitions";

export default function CartButton() {
  const { cartState } = useContext<CartContextType>(CartContext);
  const { cartProducts } = cartState;
  const { toggleDrawer } = useCartActions();

  const totalProducts = cartProducts.reduce(
    (total, product) => total + product.quantity,
    0
  );

  return (
    <>
      <Button onClick={toggleDrawer} style="tertiary">
        <img className="h-5" src="/icons/shopping-cart.png" />
        <span className="text-2xl">{totalProducts}</span>
      </Button>
    </>
  );
}

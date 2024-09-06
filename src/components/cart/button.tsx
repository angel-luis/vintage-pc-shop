import { useContext } from "react";

import Button from "@/components/common/button";
import { CartContext } from "@/contexts/cart";

export default function CartButton({
  toggleDrawer,
}: {
  toggleDrawer: () => void;
}) {
  const { cartState } = useContext(CartContext);
  const { cartProducts } = cartState;

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

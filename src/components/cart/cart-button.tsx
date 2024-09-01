import { useContext } from "react";

import Button from "@/components/common/button";
import { CartContext } from "@/contexts/cart-context";

export default function CartButton({
  handleClick,
}: {
  handleClick: () => void;
}) {
  const { cartProducts } = useContext(CartContext);

  const totalProducts = cartProducts.reduce(
    (total, product) => total + product.quantity,
    0
  );

  return (
    <>
      <Button onClick={handleClick} style="tertiary">
        <img className="h-5" src="/icons/shopping-cart.png" />
        <span className="text-2xl">{totalProducts}</span>
      </Button>
    </>
  );
}

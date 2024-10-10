import { useSelector } from "react-redux";

import Button from "@/components/common/button";
import useCartActions from "@/hooks/useCartActions";
import { getCartProducts } from "@/store/cart/selector";

export default function CartButton() {
  const cartProducts = useSelector(getCartProducts);
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

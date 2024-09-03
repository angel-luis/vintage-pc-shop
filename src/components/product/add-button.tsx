import { useContext } from "react";

import Button from "@/components/common/button";
import { CartContext } from "@/contexts/cart";
import { Product } from "@/lib/definitions";

export default function AddToCartButton({ product }: { product: Product }) {
  const { handleAddToCart } = useContext(CartContext);

  return (
    <Button style="tertiary" onClick={() => handleAddToCart(product)} widthFull>
      <img src="/icons/add-to-cart.png" className="-ms-2 me-2 h-6 w-6" />
      Add to cart
    </Button>
  );
}

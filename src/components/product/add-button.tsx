import Button from "@/components/common/button";
import useCartActions from "@/hooks/useCartActions";
import { Product } from "@/lib/definitions";

export default function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCartActions();

  return (
    <Button style="tertiary" onClick={() => addToCart(product)} widthFull>
      <img src="/icons/add-to-cart.png" className="-ms-2 me-2 h-6 w-6" />
      Add to cart
    </Button>
  );
}

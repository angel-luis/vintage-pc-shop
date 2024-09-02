import { useContext } from "react";
import { Link } from "react-router-dom";

import Button from "@/components/common/button";
import { CartContext } from "@/contexts/cart-context";
import currencyConverter from "@/lib/currency-converter";
import { Product } from "@/lib/definitions";

export default function ProductCard({ product }: { product: Product }) {
  const { handleAddToCart } = useContext(CartContext);

  return (
    <div className="relative rounded-lg border bg-gray-200 p-6">
      <div className="w95-border">
        <div className="h-56 w-full">
          <Link to={`/product/${product.slug}`}>
            <img className="mx-auto h-full" src={product.image} alt="" />
          </Link>
        </div>
        <div className="pt-6">
          <Link
            to={`/product/${product.slug}`}
            className="text-lg font-semibold leading-tight text-gray-900 hover:underline"
          >
            {product.title}
          </Link>

          <div className="flex items-center justify-between mb-4">
            <div className="mt-2 flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(product.stars)].map((_, index) => (
                  <img key={index} className="h-4 w-4" src="icons/star.svg" />
                ))}
              </div>
              <p className="text-sm font-medium text-gray-900">
                {product.score.toFixed(1)}
              </p>

              <p className="text-sm font-medium text-gray-500">
                ({product.reviews})
              </p>
            </div>

            <p className="text-2xl font-extrabold leading-tight text-gray-900">
              {currencyConverter(product.price)}
            </p>
          </div>

          <Button
            style="tertiary"
            onClick={() => handleAddToCart(product)}
            widthFull
          >
            <img src="icons/add-to-cart.png" className="-ms-2 me-2 h-6 w-6" />
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}

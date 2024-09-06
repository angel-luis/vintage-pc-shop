import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Button from "@/components/common/button";
import currencyConverter from "@/lib/currency-converter";
import { ProductQuantityAction, ProductWithQuantity } from "@/lib/definitions";

export default function CartProduct({
  product,
  removeFromCart,
  updateQuantity,
}: {
  product: ProductWithQuantity;
  removeFromCart: (product: ProductWithQuantity) => void;
  updateQuantity: (
    product: ProductWithQuantity,
    action: ProductQuantityAction
  ) => void;
}) {
  const [quantity, setQuantity] = useState(product.quantity);

  useEffect(() => {
    setQuantity(product.quantity);
  }, [product.quantity]);

  return (
    <div className="flex items-start gap-4 py-4">
      <Link to={`/product/${product.slug}`} className="h-20 w-20 shrink-0">
        <img
          className="h-full w-full rounded-sm border-2 border-navy-600"
          src={`/images/products/${product.slug}.jpg`}
        />
      </Link>

      <div className="min-w-0 flex-1 space-y-3">
        <Link
          to={`/product/${product.slug}`}
          className="text-base font-medium text-gray-900 hover:underline"
        >
          {""}
          {product.title}
        </Link>
        <div className="flex items-center gap-4">
          <form>
            <label id="quantity-input" className="sr-only">
              Choose quantity:
            </label>
            <div className="relative flex w-32 items-center">
              <Button
                type="button"
                onClick={() => updateQuantity(product, "decrement")}
                style="secondary"
              >
                <div className="h-6 items-center content-center">
                  <svg
                    className="h-3 w-3 text-gray-900"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 2"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1h16"
                    />
                  </svg>
                </div>
              </Button>
              <div className="w-10 text-center">{quantity}</div>
              <Button
                type="button"
                onClick={() => updateQuantity(product, "increment")}
                style="secondary"
              >
                <div className="h-6 items-center content-center">
                  <svg
                    className="h-3 w-3 text-gray-900"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 1v16M1 9h16"
                    />
                  </svg>
                </div>
              </Button>
            </div>
          </form>

          <p className="text-base font-bold text-gray-900">
            {currencyConverter(product.price)}
          </p>

          <Button
            type="button"
            style="secondary"
            aria-label="Remove item"
            onClick={() => removeFromCart(product)}
          >
            <img className="h-5" src="/icons/w98-recycle-bin.png" />
          </Button>
        </div>
      </div>
    </div>
  );
}

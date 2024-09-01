import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import currencyConverter from "@/lib/currency-converter";
import { ProductCart, ProductQuantityAction } from "@/lib/definitions";

import Button from "../common/button";
import Input from "../common/input";

export default function CartProduct({
  product,
  handleRemoveProduct,
  handleQuantityProduct,
}: {
  product: ProductCart;
  handleRemoveProduct: (product: ProductCart) => void;
  handleQuantityProduct: (
    product: ProductCart,
    action: ProductQuantityAction
  ) => void;
}) {
  const [quantity, setQuantity] = useState(product.quantity);

  useEffect(() => {
    setQuantity(product.quantity);
  }, [product.quantity]);

  return (
    <div className="flex items-start gap-4 py-4">
      <a href="#" className="h-20 w-20 shrink-0">
        <img
          className="h-full w-full"
          src={product.image}
          alt="Product image"
        />
      </a>

      <div className="min-w-0 flex-1 space-y-3">
        <Link
          to={product.path}
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
                onClick={() => handleQuantityProduct(product, "decrement")}
                style="secondary"
              >
                <div className="h-8 items-center content-center">
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
              <Input type="text" name="quantity" value={quantity} disabled />
              <Button
                type="button"
                onClick={() => handleQuantityProduct(product, "increment")}
                style="secondary"
              >
                <div className="h-8 items-center content-center">
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
            onClick={() => handleRemoveProduct(product)}
          >
            <svg
              className="h-4 w-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="red"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
}

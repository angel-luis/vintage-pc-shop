import { Link } from "react-router-dom";

import { ProductCart } from "@/lib/definitions";

export default function CartProduct({
  product,
  handleRemoveProduct,
}: {
  product: ProductCart;
  handleRemoveProduct: (product: ProductCart) => void;
}) {
  return (
    <div className="divide-y divide-gray-200 border-t border-gray-200">
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
                <button
                  type="button"
                  id="decrement-button"
                  data-input-counter-decrement="quantity-input"
                  className="flex h-9 items-center justify-center rounded-s-lg border border-gray-300 bg-gray-100 p-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"
                >
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
                </button>
                <input
                  type="text"
                  id="quantity-input"
                  data-input-counter
                  aria-describedby="helper-text-explanation"
                  className="block h-9 w-full border-x-0 border-gray-300 bg-gray-50 py-2 text-center text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                  defaultValue={product.quantity}
                  required
                />
                <button
                  type="button"
                  id="increment-button"
                  data-input-counter-increment="quantity-input"
                  className="flex h-9 items-center justify-center rounded-e-lg border border-gray-300 bg-gray-100 p-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"
                >
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
                </button>
              </div>
            </form>
            <p className="text-base font-bold text-gray-900">{product.price}</p>
            <button
              type="button"
              className="inline-flex items-center text-sm font-medium text-red-600 hover:underline"
              aria-label="Remove item"
              onClick={() => handleRemoveProduct(product)}
            >
              <svg
                className="me-2 h-4 w-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

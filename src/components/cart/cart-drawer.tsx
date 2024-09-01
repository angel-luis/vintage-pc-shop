import { useContext } from "react";

import CartProduct from "@/components/cart/cart-product";
import { CartContext } from "@/contexts/cart-context";
import { ProductCart } from "@/lib/definitions";

export default function CartDrawer({
  isOpen,
  setOpen,
}: {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { cartProducts, handleRemoveProduct, handleQuantityProduct } = useContext(CartContext);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      ></div>
      <div
        className={`fixed top-0 right-0 z-40 flex h-screen w-full max-w-md flex-col justify-between space-y-4 overflow-y-auto bg-white p-4 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold uppercase leading-none text-gray-500">
              Shopping Cart
            </h3>

            <button
              type="button"
              className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
              aria-label="Close cart"
              onClick={() => setOpen(false)}
            >
              <svg
                className="h-5 w-5"
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
                  d="M6 18 17.94 6M18 18 6.06 6"
                />
              </svg>
            </button>
          </div>

          {cartProducts &&
            cartProducts.length > 0 &&
            cartProducts.map((product: ProductCart) => (
              <CartProduct
                key={product.id}
                product={product}
                handleRemoveProduct={handleRemoveProduct}
                handleQuantityProduct={handleQuantityProduct}
              />
            ))}

          <div className="mb-4 rounded-lg border border-gray-100 bg-gray-50 px-4">
            <div className="divide-y divide-gray-200">
              <dl className="flex items-center justify-between gap-4 py-3">
                <dt className="font-normal text-gray-500">Subtotal</dt>
                <dd className="font-medium text-gray-900">$879</dd>
              </dl>

              <dl className="flex items-center justify-between gap-4 pb-4 pt-3">
                <dt className="font-normal text-gray-500">Tax</dt>
                <dd className="font-medium text-gray-900">$100</dd>
              </dl>

              <dl className="flex items-center justify-between gap-4 py-3 text-lg font-bold text-gray-900">
                <dt>Total</dt>
                <dd>$979</dd>
              </dl>
            </div>
          </div>
        </div>
        <div className="mt-6 gap-4 sm:flex sm:items-center sm:justify-center">
          <button
            type="button"
            className="mb-4 flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300     sm:mb-0 sm:mt-0"
          >
            Checkout
          </button>
          <button
            type="button"
            className="block w-full rounded-lg  border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100"
            onClick={() => setOpen(false)}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </>
  );
}

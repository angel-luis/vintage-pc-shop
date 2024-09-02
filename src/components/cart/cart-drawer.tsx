import { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import CartProduct from "@/components/cart/cart-product";
import Button from "@/components/common/button";
import { CartContext } from "@/contexts/cart-context";
import currencyConverter from "@/lib/currency-converter";
import { ProductCart } from "@/lib/definitions";

export default function CartDrawer({
  isOpen,
  setOpen,
}: {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { cartProducts, handleRemoveProduct, handleQuantityProduct } =
    useContext(CartContext);

  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location, setOpen]);

  const totalCost = cartProducts.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const totalCostWithoutTaxes = totalCost - totalCost * 0.08;
  const totalTaxes = totalCost * 0.08;

  return (
    <>
      <div
        className={`fixed z-40 inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      ></div>
      <div
        className={`fixed top-0 right-0 z-40 flex h-screen w-full max-w-md flex-col justify-between space-y-4 overflow-y-auto bg-gray-200 p-1 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between bg-navy-600 text-white">
            <h3 className="antialiased font-display text-2xl font-semibold rounded-sm px-4">
              Shopping Cart
            </h3>

            <Button
              type="button"
              style="secondary"
              aria-label="Close cart"
              onClick={() => setOpen(false)}
            >
              <svg
                className="inline-block h-5 w-5"
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
            </Button>
          </div>

          <div className="px-3">
            {cartProducts.length > 0 ? (
              cartProducts.map((product: ProductCart, index) => (
                <div
                  key={product.slug}
                  className={`border-b border-gray-300 ${
                    index === cartProducts.length - 1 ? "border-b-0" : ""
                  }`}
                >
                  <CartProduct
                    product={product}
                    handleRemoveProduct={handleRemoveProduct}
                    handleQuantityProduct={handleQuantityProduct}
                  />
                </div>
              ))
            ) : (
              <p className="px-2 text-black">Your cart is empty!</p>
            )}

            <div className="relative my-4 rounded-sm border border-gray-100 bg-gray-50 px-4">
              <div className="w95-border">
                <div className="divide-y divide-gray-200">
                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="font-normal text-gray-700">Subtotal</dt>
                    <dd className="font-medium text-gray-900">
                      {currencyConverter(totalCostWithoutTaxes)}
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4 pb-4 pt-3">
                    <dt className="font-normal text-gray-700">Tax (8%)</dt>
                    <dd className="font-medium text-gray-900">
                      {currencyConverter(totalTaxes)}
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4 py-3 text-lg font-bold text-gray-900">
                    <dt>Total</dt>
                    <dd>{currencyConverter(totalCost)}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 p-3 flex flex-col md:flex-row items-center justify-center gap-4">
          <Button style="secondary" onClick={() => setOpen(false)} widthFull>
            Continue Shopping
          </Button>
          {cartProducts.length > 0 && (
            <Button style="primary" onClick={() => setOpen(false)} widthFull>
              <Link to="/checkout">Checkout</Link>
            </Button>
          )}
        </div>
      </div>
    </>
  );
}

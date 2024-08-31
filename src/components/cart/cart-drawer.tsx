export default function CartDrawer({
  isOpen,
  setOpen,
}: {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18 17.94 6M18 18 6.06 6"
                />
              </svg>
            </button>
          </div>

          <div className="divide-y divide-gray-200 border-t border-gray-200">
            <div className="flex items-start gap-4 py-4">
              <a href="#" className="h-20 w-20 shrink-0">
                <img
                  className="h-full w-full"
                  src="https://placehold.co/280x280"
                  alt="imac image"
                />
              </a>

              <div className="min-w-0 flex-1 space-y-3">
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:underline"
                >
                  {""}
                  Commodore Amiga
                </a>
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
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
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
                        value="2"
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
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 1v16M1 9h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </form>
                  <p className="text-base font-bold text-gray-900">$879</p>
                  <button
                    type="button"
                    className="inline-flex items-center text-sm font-medium text-red-600 hover:underline"
                    aria-label="Remove item"
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

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

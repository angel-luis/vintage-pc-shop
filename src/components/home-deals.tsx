export default function HomeDeals() {
  const products = [
    {
      title: "Apple II",
      price: 490.0,
      image: "https://placehold.co/280x240",
      stars: 4,
      score: 4.2,
      reviews: 2,
      url: "#",
    },
    {
      title: "Commodore 64",
      price: 345.0,
      image: "https://placehold.co/280x240",
      stars: 4,
      score: 4.7,
      reviews: 8,
      url: "#",
    },
    {
      title: "IBM PC",
      price: 680.0,
      image: "https://placehold.co/280x240",
      stars: 5,
      score: 5.0,
      reviews: 1,
      url: "#",
    },
  ];

  return (
    <div className="mb-4 mx-auto max-w-screen-lg grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3">
      {products.map((product) => (
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <div className="h-56 w-full">
            <a href="#">
              <img className="mx-auto h-full" src={product.image} alt="" />
            </a>
          </div>
          <div className="pt-6">
            <a
              href="#"
              className="text-lg font-semibold leading-tight text-gray-900 hover:underline"
            >
              {product.title}
            </a>

            <div className="mt-2 flex items-center gap-2">
              <div className="flex items-center">
                {
                  // eslint-disable-next-line @typescript-eslint/no-unused-vars
                  [...Array(product.stars)].map((_) => (
                    <img className="h-4 w-4" src="star.svg" />
                  ))
                }
              </div>
              <p className="text-sm font-medium text-gray-900">
                {product.score.toFixed(1)}
              </p>

              <p className="text-sm font-medium text-gray-500">
                ({product.reviews})
              </p>
            </div>

            <div className="mt-4 flex items-center justify-between gap-4">
              <p className="text-2xl font-extrabold leading-tight text-gray-900">
                ${product.price.toFixed(2)}
              </p>

              <button
                type="button"
                className="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                <svg
                  className="-ms-2 me-2 h-5 w-5"
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
                    d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                  />
                </svg>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

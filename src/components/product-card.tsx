import { Link } from "react-router-dom";

import { Product } from "@/lib/definitions";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <div className="h-56 w-full">
        <Link to={product.path}>
          <img className="mx-auto h-full" src={product.image} alt="" />
        </Link>
      </div>
      <div className="pt-6">
        <Link
          to={product.path}
          className="text-lg font-semibold leading-tight text-gray-900 hover:underline"
        >
          {product.title}
        </Link>

        <div className="mt-2 flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(product.stars)].map((_, index) => (
              <img key={index} className="h-4 w-4" src="star.svg" />
            ))}
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
            <img src="cart-icon.svg" className="-ms-2 me-2 h-5 w-5" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

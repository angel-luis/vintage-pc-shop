import { Link } from "react-router-dom";

import ProductScore from "@/components/product/product-score";
import currencyConverter from "@/lib/currency-converter";
import { Product } from "@/lib/definitions";

import AddToCartButton from "./add-to-cart-button";

export default function ProductCard({ product }: { product: Product }) {
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
            <ProductScore product={product} />

            <p className="text-2xl font-extrabold leading-tight text-gray-900">
              {currencyConverter(product.price)}
            </p>
          </div>

          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}

import AddToCartButton from "@/components/product/add-to-cart-button";
import ProductScore from "@/components/product/product-score";
import currencyConverter from "@/lib/currency-converter";
import { Product } from "@/lib/definitions";

export default function ProductSection({ product }: { product: Product }) {
  return (
    <section className="relative py-8 bg-gray-200 md:py-16 max-w-4xl mx-auto">
      <div className="w95-border max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
          <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
            <img className="w-full" src={product.image} alt="" />
          </div>

          <div className="mt-6 sm:mt-8 lg:mt-0">
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              {product.title}
            </h1>
            <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
              <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                {currencyConverter(product.price)}
              </p>

              <ProductScore product={product} />
            </div>

            <div className="mt-6 w-1/2">
              <AddToCartButton product={product} />
            </div>

            <hr className="my-6 md:my-8 border-black" />

            <p className="mb-6 text-black">{product.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
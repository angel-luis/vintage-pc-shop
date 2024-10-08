import { useContext } from "react";

import ProductCard from "@/components/product/card";
import { ProductContext } from "@/contexts/product";
import { Product } from "@/lib/definitions";

export default function HomeDeals() {
  const productContext = useContext(ProductContext);
  const products = productContext.slice(0, 3) as Product[];

  return (
    <div className="mb-4 mx-auto max-w-screen-lg grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:mb-8">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}

import { useContext } from "react";

import ProductCard from "@/components/product/product-card";
import { ProductContext } from "@/contexts/product-context";
import { Product } from "@/lib/definitions";

export default function HomeDeals() {
  const productContext = useContext(ProductContext);
  const products = productContext.slice(0, 3) as Product[];

  return (
    <div className="mb-4 mx-auto max-w-screen-lg grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

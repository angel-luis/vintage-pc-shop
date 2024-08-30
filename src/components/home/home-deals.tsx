import ProductData from "@/data/products.json";
import { Product } from "@/lib/definitions";

import ProductCard from "../product/product-card";

export default function HomeDeals() {
  const products: Product[] = ProductData.slice(0, 3);

  return (
    <div className="mb-4 mx-auto max-w-screen-lg grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

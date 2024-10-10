import { useSelector } from "react-redux";

import ProductCard from "@/components/product/card";
import { Product } from "@/lib/definitions";
import { getProducts } from "@/store/product/selector";

export default function HomeDeals() {
  const products = useSelector(getProducts);
  const productsFiltered = products.slice(0, 3) as Product[];

  return (
    <div className="mb-4 mx-auto max-w-screen-lg grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:mb-8">
      {productsFiltered.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}

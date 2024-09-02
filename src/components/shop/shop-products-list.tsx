import ProductCard from "@/components/product/product-card";
import { Product } from "@/lib/definitions";

export default function ShopProductsList({
  products,
}: {
  products: Product[];
}) {
  return (
    <div className="flex flex-wrap gap-4">
      {products.slice(0, 12).map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}

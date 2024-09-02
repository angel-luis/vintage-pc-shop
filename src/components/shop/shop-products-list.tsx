import { useState } from "react";

import ProductCard from "@/components/product/product-card";
import ShopPagination from "@/components/shop/shop-pagination";
import { Product } from "@/lib/definitions";

export default function ShopProductsList({
  products,
}: {
  products: Product[];
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const totalPages = Math.ceil(products.length / productsPerPage);

  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = products.slice(
    startIndex,
    startIndex + productsPerPage
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {currentProducts.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
      <ShopPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

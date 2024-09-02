import { useContext, useEffect, useState } from "react";

import ShopProductsList from "@/components/shop/shop-products-list";
import ShopSideNavigation from "@/components/shop/shop-side-navigation";
import ShopSortButton from "@/components/shop/shop-sort-button";
import { ProductContext } from "@/contexts/product-context";
import { Product } from "@/lib/definitions";

export default function ShopPage() {
  const products = useContext(ProductContext);

  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  function sortByPricing(filter: "asc" | "desc") {
    if (filter === "asc") {
      setFilteredProducts([...products].sort((a, b) => a.price - b.price));
    } else {
      setFilteredProducts([...products].sort((a, b) => b.price - a.price));
    }
  }

  function searchByTitle(title: string) {
    setFilteredProducts(
      products.filter((product) => product.title.toLowerCase().includes(title))
    );
  }

  return (
    <section className="py-4 antialiased md:py-8">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mb-4 items-end justify-between sm:flex md:mb-8">
          <div className="mb-4 sm:mb-0">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li className="inline-flex items-center text-sm font-medium">
                  <svg
                    className="me-2.5 h-3 w-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                  </svg>
                  Home
                </li>
              </ol>
            </nav>
            <h2 className="mt-3 text-2xl tracking-wide antialiased font-display font-semibold sm:text-4xl">
              All Computers
            </h2>
          </div>
          <ShopSortButton sortByPricing={sortByPricing} />
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <ShopSideNavigation searchByTitle={searchByTitle} />
          <ShopProductsList products={filteredProducts} />
        </div>
      </div>
    </section>
  );
}

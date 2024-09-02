import { useContext } from "react";
import { Link, useParams } from "react-router-dom";

import ProductSection from "@/components/product/product-section";
import { ProductContext } from "@/contexts/product-context";
import { Product } from "@/lib/definitions";

export default function ProductPage() {
  const { slug } = useParams();
  const products = useContext(ProductContext);

  const product = products.find((product: Product) => product.slug === slug);

  if (product) {
    return (
      <div className="space-y-4 py-4 md:py-8">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
              <Link
                to="/shop"
                className="inline-flex items-center text-sm font-medium hover:underline"
              >
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
              </Link>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  className="h-5 w-5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m9 5 7 7-7 7"
                  />
                </svg>
                <span className="ms-1 text-sm font-medium md:ms-2">
                  {product.title}
                </span>
              </div>
            </li>
          </ol>
        </nav>
        <ProductSection product={product} />
      </div>
    );
  } else {
    return <h1>Product not found!</h1>;
  }
}

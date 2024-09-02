import { useContext } from "react";
import { Link, useParams } from "react-router-dom";

import Button from "@/components/common/button";
import { ProductContext } from "@/contexts/product-context";
import { Product } from "@/lib/definitions";

export default function ShopBrandPage() {
  const { brandSlug } = useParams();
  const products = useContext(ProductContext);

  const filteredProducts = products.filter(
    (product: Product) => product.brandSlug === brandSlug
  );

  return (
    <section className="py-4 antialiased md:py-8">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mb-4 items-end justify-between sm:flex md:mb-8">
          <div className="mb-4 sm:mb-0">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li className="inline-flex items-center">
                  <Link
                    to="/shop"
                    className="inline-flex items-center text-sm font-medium hover:text-primary-600"
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
                      Apple
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
            <h2 className="mt-3 text-2xl tracking-wide antialiased font-display font-semibold sm:text-4xl">
              Apple
            </h2>
          </div>
          <div className="flex items-center space-x-4">
            <Button type="button" style="primary">
              <svg
                className="-ms-0.5 me-2 h-4 w-4"
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
                  strokeWidth="2"
                  d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z"
                />
              </svg>
              Filters
              <svg
                className="-me-0.5 ms-2 h-4 w-4"
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
                  d="m19 9-7 7-7-7"
                />
              </svg>
            </Button>
            <Button type="button" style="primary">
              <svg
                className="-ms-0.5 me-2 h-4 w-4"
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
                  d="M7 4v16M7 4l3 3M7 4 4 7m9-3h6l-6 6h6m-6.5 10 3.5-7 3.5 7M14 18h4"
                />
              </svg>
              Sort
              <svg
                className="-me-0.5 ms-2 h-4 w-4"
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
                  d="m19 9-7 7-7-7"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useContext } from "react";
import { useParams } from "react-router-dom";

import ProductSection from "@/components/product/product-section";
import { ProductContext } from "@/contexts/product-context";
import { Product } from "@/lib/definitions";

export default function ProductPage() {
  const { slug } = useParams();
  const products = useContext(ProductContext);

  const product = products.find((product: Product) => product.slug === slug);

  if (product) {
    return <ProductSection product={product} />;
  } else {
    return <h1>Product not found!</h1>;
  }
}

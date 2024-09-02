import { useContext } from "react";
import { useParams } from "react-router-dom";

import { ProductContext } from "@/contexts/product-context";
import { Product } from "@/lib/definitions";

export default function ProductPage() {
  const { slug } = useParams();
  const products = useContext(ProductContext);

  const product = products.find((product: Product) => product.slug === slug);

  if (product) {
    return <h1>{product.title}</h1>;
  } else {
    return <h1>Product not found!</h1>;
  }
}

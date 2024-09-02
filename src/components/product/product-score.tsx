import { Product } from "@/lib/definitions";

export default function ProductScore({ product }: { product: Product }) {
  return (
    <div className="mt-2 flex items-center gap-1 tracking-tighter">
      <div className="flex items-center">
        {[...Array(product.stars)].map((_, index) => (
          <img key={index} className="h-4 w-4" src="/icons/star.svg" />
        ))}
      </div>
      <p className="text-sm font-medium text-gray-900">
        {product.score.toFixed(1)}
      </p>

      <p className="text-sm font-medium text-gray-500">({product.reviews})</p>
    </div>
  );
}

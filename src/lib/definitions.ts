export type AuthResult = {
  success: boolean;
  error: { code: string } | null;
};

export type Product = {
  slug: string;
  brandSlug: string;
  title: string;
  price: number;
  image: string;
  stars: number;
  score: number;
  reviews: number;
  description: string;
};

export type ProductCart = Product & {
  quantity: number;
};

export type ProductQuantityAction = "increment" | "decrement";

export type Brand = {
  slug: string;
  title: string;
};
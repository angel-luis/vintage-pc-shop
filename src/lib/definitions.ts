export type AuthResult = {
  success: boolean;
  error: { code: string } | null;
};

export type Product = {
  title: string;
  price: number;
  image: string;
  stars: number;
  score: number;
  reviews: number;
  path: string;
};

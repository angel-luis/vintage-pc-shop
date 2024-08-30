export type AuthResult = {
  success: boolean;
  error: { code: string } | null;
};

export type Product = {
  id: string;
  title: string;
  price: number;
  image: string;
  stars: number;
  score: number;
  reviews: number;
  path: string;
};

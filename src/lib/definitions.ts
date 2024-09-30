export type AuthResult = {
  success: boolean;
  error: { code: string } | null;
};

export type Product = {
  slug: string;
  brandSlug: string;
  title: string;
  price: number;
  stars: number;
  score: number;
  reviews: number;
  description: string;
};

export type ProductWithQuantity = Product & {
  quantity: number;
};

export type ProductQuantityAction = "increment" | "decrement";

export type Brand = {
  slug: string;
  title: string;
};

export type CartState = {
  cartProducts: ProductWithQuantity[];
  isDrawerOpen: boolean;
};

export type CartContextType = {
  cartState: CartState;
  cartDispatcher: React.Dispatch<CartAction>;
};

export type CartAction =
  | { type: "UPDATE_CART_PRODUCTS"; payload: ProductWithQuantity[] }
  | { type: "TOOGLE_DRAWER"; payload: boolean };

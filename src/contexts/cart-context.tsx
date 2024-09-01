import { createContext, useState } from "react";

import { Product, ProductCart, ProductQuantityAction } from "@/lib/definitions";

type CartContextType = {
  cartProducts: ProductCart[];
  setCartProducts: React.Dispatch<React.SetStateAction<ProductCart[]>>;
  handleRemoveProduct: (product: Product) => void;
  handleAddToCart: (product: Product) => void;
  handleQuantityProduct: (
    product: ProductCart,
    action: ProductQuantityAction
  ) => void;
  isDrawerOpen: boolean;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CartContext = createContext<CartContextType>({
  cartProducts: [],
  setCartProducts: () => {},
  handleRemoveProduct: () => {},
  handleAddToCart: () => {},
  handleQuantityProduct: () => {},
  isDrawerOpen: false,
  setDrawerOpen: () => {},
});

export function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const [cartProducts, setCartProducts] = useState<ProductCart[]>([]);

  function handleRemoveProduct(product: Product) {
    if (setCartProducts !== null) {
      const newCartProducts = cartProducts.filter(
        (cartProduct) => cartProduct.id !== product.id
      );

      setCartProducts(newCartProducts);
    }
  }

  function handleAddToCart(product: Product) {
    if (setCartProducts !== null) {
      // Check if product is already in cart
      const productInCart = cartProducts.find(
        (cartProduct) => cartProduct.id === product.id
      );

      // If product is already in cart, increase quantity
      if (productInCart) {
        const newCartProducts = cartProducts.map((cartProduct) => {
          if (cartProduct.id === product.id) {
            return { ...cartProduct, quantity: cartProduct.quantity + 1 };
          }
          return cartProduct;
        });

        setCartProducts(newCartProducts);
      } else {
        // If product is not in cart, add it
        setCartProducts((prev) => [...prev, { ...product, quantity: 1 }]);
      }
    }
  }

  function handleQuantityProduct(
    product: ProductCart,
    action: ProductQuantityAction
  ) {
    if (action === "increment") {
      const newCartProducts = cartProducts.map((cartProduct) => {
        if (cartProduct.id === product.id) {
          return { ...cartProduct, quantity: cartProduct.quantity + 1 };
        }
        return cartProduct;
      });

      setCartProducts(newCartProducts);
    } else {
      if (product.quantity > 1) {
        const newCartProducts = cartProducts.map((cartProduct) => {
          if (cartProduct.id === product.id) {
            return { ...cartProduct, quantity: cartProduct.quantity - 1 };
          }
          return cartProduct;
        });
        setCartProducts(newCartProducts);
      }
    }
  }

  const providerValue: CartContextType = {
    cartProducts,
    setCartProducts,
    handleRemoveProduct,
    handleAddToCart,
    handleQuantityProduct,
    isDrawerOpen,
    setDrawerOpen,
  };

  return (
    <CartContext.Provider value={providerValue}>
      {children}
    </CartContext.Provider>
  );
}

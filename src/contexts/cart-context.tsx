import { createContext, useState } from "react";

import { Product, ProductCart } from "@/lib/definitions";

type CartContextType = {
  cartProducts: ProductCart[];
  setCartProducts: React.Dispatch<React.SetStateAction<ProductCart[]>>;
  handleRemoveProduct: (product: Product) => void;
  handleAddToCart: (product: Product) => void;
};

export const CartContext = createContext<CartContextType>({
  cartProducts: [],
  setCartProducts: () => {},
  handleRemoveProduct: () => {},
  handleAddToCart: () => {},
});

export function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
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

  const providerValue: CartContextType = {
    cartProducts,
    setCartProducts,
    handleRemoveProduct,
    handleAddToCart,
  };

  return (
    <CartContext.Provider value={providerValue}>
      {children}
    </CartContext.Provider>
  );
}

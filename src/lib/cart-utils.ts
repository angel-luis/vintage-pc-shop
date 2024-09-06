import {
  Product,
  ProductQuantityAction,
  ProductWithQuantity,
} from "@/lib/definitions";

export function handleAddToCart(
  cartProducts: ProductWithQuantity[],
  product: Product
): ProductWithQuantity[] {
  // Check if product is already in cart
  const isProductInCart: ProductWithQuantity | undefined = cartProducts.find(
    (cartProduct) => cartProduct.slug === product.slug
  );

  // If product is already in cart, increase quantity
  if (isProductInCart !== undefined) {
    const newCartProducts = cartProducts.map((cartProduct) => {
      if (cartProduct.slug === product.slug) {
        return { ...cartProduct, quantity: cartProduct.quantity + 1 };
      }
      return cartProduct;
    });

    return newCartProducts;

    // If product is not in cart, add it
  } else {
    return [...cartProducts, { ...product, quantity: 1 }];
  }
}

export function handleRemoveFromCart(
  cartProducts: ProductWithQuantity[],
  product: Product
): ProductWithQuantity[] {
  return cartProducts.filter(
    (cartProduct) => cartProduct.slug !== product.slug
  );
}

export function handleUpdateQuantity(
  cartProducts: ProductWithQuantity[],
  product: Product,
  action: ProductQuantityAction
): ProductWithQuantity[] {
  return cartProducts.map((cartProduct) => {
    if (cartProduct.slug === product.slug) {
      if (action === "increment") {
        return { ...cartProduct, quantity: cartProduct.quantity + 1 };
      } else if (action === "decrement") {
        return {
          ...cartProduct,
          quantity: Math.max(1, cartProduct.quantity - 1),
        };
      }
    }

    return cartProduct;
  });
}

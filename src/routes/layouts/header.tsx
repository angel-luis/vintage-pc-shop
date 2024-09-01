import { useContext } from "react";
import { Link } from "react-router-dom";

import CartButton from "@/components/cart/cart-button";
import CartDrawer from "@/components/cart/cart-drawer";
import { CartContext } from "@/contexts/cart-context";

export default function HeaderLayout() {
  const { isDrawerOpen, setDrawerOpen } = useContext(CartContext);

  const menuLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Shop",
      path: "/shop",
    },
    {
      name: "My Account",
      path: "/my-account",
    },
  ];

  return (
    <header className="flex justify-between items-center mx-8 my-4">
      <h1>Logo</h1>
      <nav className="flex gap-4 items-center">
        {menuLinks.map((link) => (
          <Link key={link.path} to={link.path} className="hover:underline">
            {link.name}
          </Link>
        ))}
        <CartButton handleClick={() => setDrawerOpen(!isDrawerOpen)} />
        <CartDrawer isOpen={isDrawerOpen} setOpen={setDrawerOpen} />
      </nav>
    </header>
  );
}

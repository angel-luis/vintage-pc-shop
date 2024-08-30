import { Link } from "react-router-dom";

import CartButton from "@/components/cart/cart-button";

export default function HeaderLayout() {
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
    <header className="flex justify-between items-center mx-8 my-2">
      <h1>Logo</h1>
      <nav className="flex gap-4 items-center">
        {menuLinks.map((link) => (
          <Link key={link.path} to={link.path} className="hover:underline">
            {link.name}
          </Link>
        ))}
        <CartButton />
      </nav>
    </header>
  );
}

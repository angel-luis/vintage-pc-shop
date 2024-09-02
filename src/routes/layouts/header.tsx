import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import CartButton from "@/components/cart/cart-button";
import CartDrawer from "@/components/cart/cart-drawer";
import Button from "@/components/common/button";
import Logo from "@/components/common/logo";
import { CartContext } from "@/contexts/cart-context";

export default function HeaderLayout() {
  const { isDrawerOpen, setDrawerOpen } = useContext(CartContext);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuLinks = [
    {
      name: "Home",
      path: "/",
      icon: "w98-desktop.png",
    },
    {
      name: "Shop",
      path: "/shop",
      icon: "w98-directory-explorer.png",
    },
    {
      name: "My Account",
      path: "/my-account",
      icon: "w98-keys.png",
    },
  ];

  return (
    <header className="bg-gray-200">
      <div className="flex justify-between items-center mx-8 my-2">
        <Logo />
        <nav className="flex gap-4 items-center">
          <div className="hidden sm:flex gap-4 items-center">
            {menuLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <Button style="secondary">
                  <img className="w-6" src={`/icons/${link.icon}`} />{" "}
                  {link.name}
                </Button>
              </Link>
            ))}
          </div>
          <div className="sm:hidden">
            <Button
              style="primary"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            >
              <img className="h-8" src="icons/menu.png" />
            </Button>
          </div>
          <CartButton handleClick={() => setDrawerOpen(!isDrawerOpen)} />
          <CartDrawer isOpen={isDrawerOpen} setOpen={setDrawerOpen} />
        </nav>
      </div>
      {isMobileMenuOpen && (
        <div className="flex flex-col gap-4 bg-gray-200 p-8">
          {menuLinks.map((link) => (
            <Link key={link.path} to={link.path}>
              <Button style="secondary" widthFull>
                <img className="w-6" src={`/icons/${link.icon}`} /> {link.name}
              </Button>
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

import { Link, Outlet } from "react-router-dom";

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
      name: "Contact",
      path: "/contact",
    },
    {
      name: "Sign In",
      path: "/signin",
    },
  ];

  return (
    <>
      <nav className="flex justify-between mx-8 my-2">
        <h1>Logo</h1>
        <div className="flex gap-4">
          {menuLinks.map((link) => (
            <Link key={link.path} to={link.path} className="hover:underline">
              {link.name}
            </Link>
          ))}
        </div>
      </nav>

      <Outlet />
    </>
  );
}

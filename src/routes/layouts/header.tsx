import { Link } from "react-router-dom";

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
    <header className="flex justify-between mx-8 my-2">
      <h1>Logo</h1>
      <nav className="flex gap-4">
        {menuLinks.map((link) => (
          <Link key={link.path} to={link.path} className="hover:underline">
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
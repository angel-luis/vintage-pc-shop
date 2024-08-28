import { Link } from "react-router-dom";

export default function FooterLayout() {
  const footerLinks = [
    {
      name: "Terms & Conditions",
      path: "/terms-and-conditions",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <footer className="mx-8 my-4">
      <div className="flex justify-between ">
        <h1>Logo</h1>
        <div className="flex gap-4 text-sm">
          {footerLinks.map((link) => (
            <Link key={link.path} to={link.path} className="hover:underline">
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      <hr className="my-6 border-gray-200" />
      <div className="text-center text-sm">
        Vintage PC Shop - Made by Angel Luis
      </div>
    </footer>
  );
}

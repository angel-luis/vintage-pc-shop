import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/">
      <div className="flex gap-2">
        <img className="w-8 h-8" src="/icons/logo.svg" />
        <h1 className="text-2xl font-display font-semibold">Vintage PC Shop</h1>
      </div>
    </Link>
  );
}

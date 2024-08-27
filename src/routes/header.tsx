import { Outlet } from "react-router-dom";

export default function HeaderLayout() {
  return (
    <>
      <nav className="flex justify-between mx-8 my-2">
        <h1>Logo</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}

import { Outlet } from "react-router-dom";

import FooterLayout from "@/routes/layouts/footer";
import HeaderLayout from "@/routes/layouts/header";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen justify-stretch">
      <HeaderLayout />
      <div className="flex-grow px-8 py-4">
        <Outlet />
      </div>
      <FooterLayout />
    </div>
  );
}

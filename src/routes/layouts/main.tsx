import { Outlet } from "react-router-dom";

import ScrollToTop from "@/components/common/scrollToTop";
import FooterLayout from "@/routes/layouts/footer";
import HeaderLayout from "@/routes/layouts/header";

export default function MainLayout() {
  return (
    <ScrollToTop>
      <div className="flex flex-col min-h-screen justify-stretch">
        <HeaderLayout />
        <div className="flex-grow px-2 md:px-4 py-4">
          <Outlet />
        </div>
        <FooterLayout />
      </div>
    </ScrollToTop>
  );
}

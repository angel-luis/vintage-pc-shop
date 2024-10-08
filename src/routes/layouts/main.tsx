import { User } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

import ScrollToTop from "@/components/common/scrollToTop";
import { observeAuthChange } from "@/data/firebase";
import FooterLayout from "@/routes/layouts/footer";
import HeaderLayout from "@/routes/layouts/header";
import { setUser } from "@/store/user/action";

export default function MainLayout() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = observeAuthChange((user: User | null) => {
      dispatch(setUser(user));
    });

    // return this instead () => unsubscribe, because is a wrapper of the real observer
    return unsubscribe;
    // dispatch never changes, just added to dependencies to avoid lint warning
  }, [dispatch]);

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

import {
  Outlet,
  useLocation,
  useOutletContext,
  useSearchParams,
} from "react-router";
import CompletedHeader from "~/components/finalized-order-page/CompletedHeader";
import Footer from "~/components/footer/Footer";
import CheckoutHeader from "~/components/header/CheckoutHeader";
import MainHeader from "~/components/header/MainHeader";

import SuperHeader from "~/components/super-header/SuperHeader";

type OutletContextType = {
  navigation: { items: { title: string; url: string }[] };
  footerMenusArray: { title: string; items: any }[];
};

export default function AppLayout() {
  const { navigation, footerMenusArray } =
    useOutletContext<OutletContextType>();

  const location = useLocation();
  const [searchParams] = useSearchParams();

  const isCheckout = location.pathname === "/cart" && searchParams.has("step");
  const isCompleted = location.pathname === "/completion";

  return (
    <div className="relative mx-auto flex h-full max-w-[2600px] flex-col">
      <SuperHeader />
      {isCheckout ? (
        <CheckoutHeader />
      ) : isCompleted ? (
        <CompletedHeader />
      ) : (
        <MainHeader navigation={navigation} />
      )}

      <main className="p-full-page flex-1">
        <Outlet />
      </main>
      <Footer footerMenusArray={footerMenusArray} />
    </div>
  );
}

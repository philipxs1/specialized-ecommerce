import { useEffect, useState } from "react";
import {
  Outlet,
  useLocation,
  useOutletContext,
  useSearchParams,
} from "react-router";
import Footer from "~/components/footer/Footer";
import CheckoutHeader from "~/components/header/CheckoutHeader";
import Header from "~/components/header/Header";
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

  return (
    <div className="relative mx-auto flex h-full max-w-[2600px] flex-col">
      <SuperHeader />
      {isCheckout ? <CheckoutHeader /> : <Header navigation={navigation} />}
      <main className="p-full-page flex-1">
        <Outlet />
      </main>
      <Footer footerMenusArray={footerMenusArray} />
    </div>
  );
}

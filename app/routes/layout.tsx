import { Outlet } from "react-router";
import Footer from "~/components/footer/Footer";
import Header from "~/components/Header/Header";

import SuperHeader from "~/components/SuperHeader/SuperHeader";
import useFooterMenus from "~/hooks/useFooterMenus";
import useMainNavigation from "~/hooks/useMainNavigation";

export const NAVLINKS = [
  { title: "Bikes", url: "/shop/bikes" },
  { title: "Apparel", url: "/shop/cycling-clothing" },
  { title: "Parts", url: "/shop/cycling-gear/bike-parts" },
  { title: "Accessories", url: "/shop/cycling-gear/bike-accessories" },
  { title: "Sale", url: "/shop/sale" },
];

export default function Layout() {
  const {
    data: navigation,
    isPending,
    isError: navIsError,
    error,
  } = useMainNavigation();
  const { data: footerMenus, isLoading, isError } = useFooterMenus();

  const footerMenusArray = footerMenus
    ? Object.entries(footerMenus).map(([menu, items]) => ({
        title: menu,
        items,
      }))
    : [];

  if (navIsError) {
    console.error("Failed to load Navigation:", error);
  }

  return (
    <div className="relative flex h-full flex-col">
      <SuperHeader />
      {
        <Header
          navigation={navigation?.items ? navigation : { items: NAVLINKS }}
        />
      }
      <main className="p-full-page flex-1">
        <Outlet />
      </main>
      <Footer footerMenusArray={footerMenusArray} />
    </div>
  );
}

import { Outlet, useOutletContext } from "react-router";
import Footer from "~/components/footer/Footer";
import Header from "~/components/header/Header";
import SuperHeader from "~/components/super-header/SuperHeader";

import type { Navigation } from "~/entities/Navigation";

// Define the shape of context passed from root.tsx
type LayoutContext = {
  navigation: Navigation;
  footerMenusArray: { title: string; items: any[] }[];
};

export default function Layout() {
  // Grab context values from root.tsx
  const { navigation, footerMenusArray } = useOutletContext<LayoutContext>();

  return (
    <div className="relative mx-auto flex h-full max-w-[2600px] flex-col">
      <SuperHeader />
      <Header navigation={navigation} />
      <main className="p-full-page flex-1">
        <Outlet />
      </main>
      <Footer footerMenusArray={footerMenusArray} />
    </div>
  );
}

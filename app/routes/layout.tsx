import { Outlet } from "react-router";
import Header from "~/components/Header/Header";
import Nav from "~/components/Nav/Nav";

export default function Layout() {
  return (
    <div className="flex h-full flex-col">
      <Header />
      <main className="p-full-page flex-1">
        <Outlet />
      </main>
      <div className="bg-blue-300 p-2">footer</div>
    </div>
  );
}

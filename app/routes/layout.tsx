import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="flex h-full flex-col">
      <div className="bg-amber-300 p-2">header</div>
      <main className="flex-1">
        <Outlet />
      </main>
      <div className="bg-blue-300 p-2">footer</div>
    </div>
  );
}

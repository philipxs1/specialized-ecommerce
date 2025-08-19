import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-10">
      <h1 className="text-5xl">404 - Page Not Found</h1>
      <Link
        className="rounded-md bg-slate-600 px-4 py-3 text-xl text-white hover:bg-slate-800 hover:underline"
        to="/"
      >
        Bring me back
      </Link>
    </div>
  );
}

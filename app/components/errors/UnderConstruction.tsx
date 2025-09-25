import React from "react";
import { Link } from "react-router";

const UnderConstruction = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-10">
      <h1 className="text-5xl">Page under construction</h1>
      <Link
        className="rounded-md bg-slate-600 px-4 py-3 text-xl text-white hover:bg-slate-800 hover:underline"
        to="/"
      >
        Bring me back
      </Link>
    </div>
  );
};

export default UnderConstruction;

import React from "react";

const SuperHeader = () => {
  return (
    <aside className="flex h-8 w-full items-center justify-between bg-black px-10 py-2 text-white">
      <span className="block text-xs leading-[150%] font-[400]">
        Free shipping on orders over $250
      </span>
      <div className="flex gap-5 text-xs">
        <span>Support Center</span>
        <span>|</span>
        <span>Find A Store</span>
      </div>
    </aside>
  );
};

export default SuperHeader;

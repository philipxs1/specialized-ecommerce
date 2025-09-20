import React from "react";

const SuperHeader = () => {
  return (
    <aside className="flex h-8 w-full items-center justify-between bg-black px-10 py-2 text-white">
      <span className="hidden text-xs leading-[150%] font-[400] md:block">
        This is a training/demo site. Not affiliated with Specialized. All
        content is for educational purposes only.
      </span>
      <span className="text-xs leading-[150%] font-[400] md:hidden">
        This is a training/demo site.
      </span>
      <div className="text-xs md:hidden">Specialized</div>
      <div className="hidden gap-5 text-xs md:flex">
        <span>Support Center</span>
        <span>|</span>
        <span>Find A Store</span>
      </div>
    </aside>
  );
};

export default SuperHeader;

import React from "react";

interface MenuColumnProps {
  title: string;
  items: string[];
}

const MenuColumn = ({ title, items }: MenuColumnProps) => {
  return (
    <div className="hidden w-[200px] flex-col gap-5 md:flex">
      <h2 className="text-white-headers mt-4 text-sm font-light capitalize">
        {title}
      </h2>
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li className="cursor-pointer text-wrap">
            <p className="text-xs">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuColumn;

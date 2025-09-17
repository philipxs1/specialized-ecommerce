import React, { useState } from "react";
import Icon from "~/ui/Icon/Icon";

interface MenuColumnProps {
  title: string;
  items: string[];
}

const MobileMenuColumn = ({ title, items }: MenuColumnProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="block w-full md:hidden">
      <div className="border-b-border-bottom mt-4 flex justify-between border-b">
        <h2 className="text-white-headers mb-4 text-sm font-light capitalize">
          {title}
        </h2>
        <button
          className="cursor-pointer transition duration-300 ease-in-out"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Icon id={isOpen ? "chevron-up" : "chevron-down"} size={24} />
        </button>
      </div>
      <div
        className={`overflow-hidden transition-[max-height,opacity] ease-out ${isOpen ? "max-h-96 opacity-100 duration-300" : "max-h-0 opacity-0 duration-200"} `}
      >
        <ul className="mt-4 mb-4 flex flex-col gap-2">
          {items.map((item, index) => (
            <li key={index} className="cursor-pointer">
              <p className="text-xs">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenuColumn;

//

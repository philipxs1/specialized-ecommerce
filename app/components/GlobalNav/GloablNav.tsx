import React from "react";
import Icon from "~/ui/Icon/Icon";

const NavItems = [
  "Bikes",
  "Parts",
  "Apparel",
  "Accessories",
  "Sale",
  "Inside Specialized",
  "Support",
];

const GloablNav = () => {
  return (
    <div className="flex pt-3 pb-2 text-[0.75rem]">
      <nav className="flex-1">
        <ul className="flex gap-6 font-medium">
          {NavItems.map((item) => (
            <li key={item} className="cursor-pointer">
              <a href="/" />
              {item}
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <a href="" className="flex items-center gap-2">
          <div>
            <Icon id="home" strokeWidth={1} />
          </div>
          <span className="hover:text-nav-hover align-baseline text-xs">
            find a retailer
          </span>
        </a>
      </div>
    </div>
  );
};

export default GloablNav;

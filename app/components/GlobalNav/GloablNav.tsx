import React from "react";
import { NavLink } from "react-router";
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
        <ul className="flex gap-10 font-medium">
          {NavItems.map((item) => (
            <li key={item} className="group relative transform cursor-pointer">
              <NavLink to={`/shop/${item}`}>
                {item}
                <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-black duration-400 ease-in-out group-hover:w-full" />
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <NavLink to="/" className="flex items-center gap-2">
          <div>
            <Icon id="home" strokeWidth={1} />
          </div>
          <span className="hover:text-nav-hover align-baseline text-xs">
            find a retailer
          </span>
        </NavLink>
      </div>
    </div>
  );
};

export default GloablNav;

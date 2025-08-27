import { useState } from "react";
import type { Filters } from "~/entities/Filters";
import Icon from "~/ui/Icon/Icon";

const SideBar = ({ filters }: Filters[]) => {
  return (
    <div className="sidebar-scrollbar sticky top-[20px] block h-screen overflow-y-scroll">
      <div className="w-[332px]">
        <div className="flex w-full flex-col">
          <div className="mr-6 flex flex-col gap-2 pr-3 pl-6">
            {filters?.map((option: Filters) => {
              return <FilterCard {...option} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

const FilterCard = ({ type, label, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white-gray rounded-lg p-4">
      <div className="rounded-lg bg-white px-4">
        <div
          className="flex w-full cursor-pointer items-center py-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h2 className="text-sm font-bold">{label}</h2>
          <div className="ml-auto flex items-center gap-4">
            <Icon id={isOpen ? "minus" : "plus"} />
          </div>
        </div>
        {isOpen && (
          <div className="flex flex-col">
            <ul className="flex flex-col gap-2">
              {options.map((option) => (
                <Options option={option} type={type} />
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

const Options = ({ option, type }) => {
  return (
    <li>
      <fieldset className="flex gap-5">
        <div>
          <input type={type} name="option" id="option" />
        </div>
        <label>
          <span>{option}</span>
        </label>
      </fieldset>
    </li>
  );
};

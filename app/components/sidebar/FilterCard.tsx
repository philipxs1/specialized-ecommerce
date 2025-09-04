import { useState } from "react";
import Icon from "~/ui/Icon/Icon";
import FilterOptions from "./FilterOptions";

type FilterCardProps = {
  label: string;
  options: string[];
  initialOpen?: boolean;
};

const FilterCard = ({ label, options }: FilterCardProps) => {
  const [isOpen, setIsOpen] = useState(true);

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
            <ul className="mb-2 flex flex-col gap-2">
              {options.map((option, index) => (
                <FilterOptions
                  key={index}
                  option={option}
                  type="checkbox"
                  label={label}
                  index={index}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterCard;

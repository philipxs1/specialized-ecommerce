import type { Filters } from "~/entities/Filters";

import FilterCard from "./FilterCard";
import SortByCard from "./SortByCard";

type SideBarProps = {
  filters: Filters[];
};

const SideBar = ({ filters }: SideBarProps) => {
  return (
    <div className="sidebar-scrollbar sticky top-[20px] hidden h-screen overflow-y-scroll lg:block">
      <div className="w-[332px]">
        <div className="flex w-full flex-col">
          <div className="mr-6 flex flex-col gap-2 pr-3 pl-6">
            <SortByCard />
            {filters?.map((option: Filters) => {
              return <FilterCard key={option.label} {...option} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

import React from "react";
import { useFilters } from "~/context/FilterProvider";

type Props = {
  filter: string;
};

const FilterButton = ({ filter }: Props) => {
  const { removeFilter } = useFilters();

  return (
    <button
      className="cursor-pointer rounded-lg bg-gray-200 px-4 py-2"
      onClick={() => removeFilter(filter)}
    >
      {filter}
    </button>
  );
};

export default FilterButton;

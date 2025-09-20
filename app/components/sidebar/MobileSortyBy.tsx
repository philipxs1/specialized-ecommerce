import { useState } from "react";
import { useFilters } from "~/context/FilterProvider";

const SORTBY = {
  label: "Sort By",
  options: ["Featured", "New", "Price (Low-High)", "Price (High-Low)"],
};

const MobileSortBy = ({ option, type, label, index }: any) => {
  const { sortBy, setSortBy } = useFilters();

  const inputID = `${label}-${index}`;

  return (
    <fieldset className="flex flex-col gap-5 md:flex-row">
      <div className="flex">
        <label htmlFor={SORTBY.label} className="text-nowrap">
          <span>{SORTBY.label}</span>
        </label>
      </div>
      <select
        id={SORTBY.label}
        value={sortBy}
        className="bg-black-darker appearance-none rounded-sm px-2 py-1 text-center text-white"
        onChange={(e) => setSortBy(e.target.value)}
      >
        {SORTBY.options?.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </fieldset>
  );
};

export default MobileSortBy;

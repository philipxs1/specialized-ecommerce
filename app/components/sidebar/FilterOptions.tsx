import { useFilters } from "~/context/FilterProvider";

const FilterOptions = ({ option, type, label, index }: any) => {
  const { toggleFilter, activeFilters } = useFilters();
  const inputID = `${label}-${index}`;

  return (
    <li>
      <fieldset className="flex gap-5">
        <div>
          <input
            type="checkbox"
            name={option}
            id={inputID}
            checked={activeFilters?.includes(option)}
            onChange={(e) => toggleFilter(option)}
          />
        </div>
        <label htmlFor={inputID}>
          <span>{option}</span>
        </label>
      </fieldset>
    </li>
  );
};

export default FilterOptions;

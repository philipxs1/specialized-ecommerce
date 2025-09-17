import { useFilters } from "~/context/FilterProvider";

const SortByOptions = ({ option, type, label, index }: any) => {
  const { sortBy, setSortBy } = useFilters();
  const inputID = `${label}-${index}`;

  return (
    <li>
      <fieldset className="flex gap-5">
        <div>
          <input
            type="checkbox"
            name={option}
            value={option}
            id={inputID}
            checked={sortBy === option}
            onChange={() => setSortBy(option)}
          />
        </div>
        <label htmlFor={inputID}>
          <span>{option}</span>
        </label>
      </fieldset>
    </li>
  );
};

export default SortByOptions;

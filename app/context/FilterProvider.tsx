import { createContext, useContext, useState } from "react";

type FilterContextType = {
  activeFilters: string[];
  isLoading: boolean;
  toggleFilter: (filter: string) => void;
  removeFilter: (filter: string) => void;
  sortBy: string;
  setSortBy: (value: string) => void;
};

export const FilterContext = createContext<FilterContextType | null>(null);

export const FilterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sortBy, setSortBy] = useState("Featured");

  const removeFilter = (filter: string) => {
    setActiveFilters((prev) => prev.filter((f) => f !== filter));
  };

  const toggleFilter = (filter: string) => {
    setActiveFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter],
    );
  };
  return (
    <FilterContext.Provider
      value={{
        activeFilters,
        isLoading,
        toggleFilter,
        removeFilter,
        sortBy,
        setSortBy,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilters = () => {
  const ctx = useContext(FilterContext);
  if (!ctx) throw new Error("useFilters must be used within FilterProvider");
  return ctx;
};

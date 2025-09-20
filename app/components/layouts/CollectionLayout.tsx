import Carousel from "../carousel/Carousel";

import SideBar from "../sidebar/SideBar";

import CollectionGrid from "../collection-page/CollectionGrid";
import MobileSortBy from "../sidebar/MobileSortyBy";

export type CollectionLayoutTypes = {
  title: string;
  tiles?: any[];
  products?: any[];
  filters?: any[];
  isLoading?: boolean;
  isError?: boolean;
};

const CollectionLayout = ({
  title,
  products,
  tiles,
  filters,
  isLoading,
  isError,
}: CollectionLayoutTypes) => {
  return (
    <div>
      <div className="mx-6 my-6 flex h-full">
        <div className="flex w-full flex-col justify-between gap-5 md:flex-row">
          <h1 className="text-2xl font-bold">
            {title} &nbsp;
            <span className="p-2 text-lg font-normal">
              ({products?.length})
            </span>
          </h1>
          <div className="lg:hidden">
            <MobileSortBy />
          </div>
        </div>
        <div className="flex gap-5">
          {/* {activeFilters?.map((filter) => <FilterButton filter={filter} />)} */}
        </div>
      </div>
      {tiles && <Carousel tiles={tiles} />}
      <div className="relative mx-auto my-0 flex max-w-[var(--setmax-width)] py-4">
        <SideBar filters={filters} />
        {isLoading ? (
          <p> loading data</p>
        ) : isError ? (
          <p>Error loading products</p>
        ) : (
          <CollectionGrid products={products ?? []} />
        )}
      </div>
    </div>
  );
};

export default CollectionLayout;

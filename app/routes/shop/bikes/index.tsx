import Carousel from "~/components/carousel/Carousel";

import ProductGrid from "~/components/products/ProductGrid";
import FilterButton from "~/components/sidebar/FilterButton";
import SideBar from "~/components/sidebar/SideBar";
import { useFilters } from "~/context/FilterProvider";
import useBikes from "~/hooks/useBikes";

import useBikespageTiles from "~/hooks/useBikespageTiles";
import useFilterOptions from "~/hooks/useFilterOptions";
import useProductsByCollection from "~/hooks/useProductsByCollection";

export default function BikesRoute() {
  const { activeFilters, sortBy } = useFilters();

  const { data: tiles, isLoading, isError } = useBikespageTiles();
  const { data: products } = useProductsByCollection("bikes");

  const { data: filters } = useFilterOptions();

  if (isLoading) {
    return <p>Loading collections...</p>;
  }

  if (isError || !tiles) return <p>Something went wrong loading collections</p>;

  return (
    <div>
      <div className="mx-6 my-6 flex h-full gap-20">
        <h1 className="text-2xl font-bold">
          {products?.title} &nbsp;
          <span className="p-2 text-lg font-normal">
            ({products?.allBikes.length})
          </span>
        </h1>
        <div className="flex gap-5">
          {activeFilters?.map((filter) => <FilterButton filter={filter} />)}
        </div>
      </div>
      <Carousel tiles={tiles.bikes} promo={tiles.promos} />
      <div className="relative mx-auto my-0 flex max-w-[var(--setmax-width)] py-4">
        <SideBar filters={filters} />
        <ProductGrid bikes={products?.allBikes ?? []} />
      </div>
    </div>
  );
}

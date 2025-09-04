import Carousel from "~/components/carousel/Carousel";
import ProductGrid from "~/components/products/ProductGrid";
import SideBar from "~/components/sidebar/SideBar";
import { useFilters } from "~/context/FilterProvider";
import useApparelTiles from "~/hooks/useApparelTiles";
import useBikespageTiles from "~/hooks/useBikespageTiles";
import useFilterOptions from "~/hooks/useFilterOptions";
import useProductsByCollection from "~/hooks/useProductsByCollection";

export default function ClothingRoute() {
  const { activeFilters, sortBy } = useFilters();

  const { data: tiles, isLoading, isError } = useApparelTiles();
  const { data: products } = useProductsByCollection("cycling-clothing");

  if (isLoading) return <p>Loading collections...</p>;
  if (isError || !tiles) return <p>Something went wrong loading collections</p>;

  console.log(tiles);

  return (
    <div>
      <div className="mx-6 my-6 flex h-full gap-20">
        <h1 className="text-2xl font-bold">
          {products?.title} &nbsp;
          <span className="p-2 text-lg font-normal">
            ({products?.allBikes.length})
          </span>
        </h1>
      </div>
      <Carousel tiles={tiles.clothes} />
      <div className="relative mx-auto my-0 flex max-w-[var(--setmax-width)] py-4">
        <SideBar />
        <ProductGrid bikes={products?.allBikes ?? []} />
      </div>
    </div>
  );
}

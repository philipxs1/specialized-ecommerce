import Carousel from "~/components/carousel/Carousel";

import ProductGrid from "~/components/products/ProductGrid";
import SideBar from "~/components/sidebar/SideBar";
import useBikes from "~/hooks/useBikes";
import useBikespageTiles from "~/hooks/useBikespageTiles";
import useFilterOptions from "~/hooks/useFilterOptions";

export default function BikesRoute() {
  const { data: tiles, isLoading, isError } = useBikespageTiles();
  const {
    data: products,
    isLoading: isLoadingProducts,
    isError: isProductError,
  } = useBikes();
  const { data: filters } = useFilterOptions();

  if (isLoading) return <p>Loading collections...</p>;
  if (isError || !tiles) return <p>Something went wrong loading collections</p>;

  console.log(filters);

  return (
    <div>
      <div className="mx-6 my-6">
        <h1 className="text-2xl font-bold">
          {products?.title}
          &nbsp;
          <span className="text-lg font-normal">
            ({products?.allBikes.length})
          </span>
        </h1>
      </div>
      <Carousel tiles={tiles.bikes} promo={tiles.promos} />
      <div className="max-w-[var(--setmax-width) relative mx-auto my-0 flex py-4">
        <SideBar filters={filters} />
        <ProductGrid bikes={products?.allBikes ?? []} />
      </div>
    </div>
  );
}

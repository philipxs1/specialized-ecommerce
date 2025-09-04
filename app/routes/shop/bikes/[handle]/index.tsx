import { useEffect } from "react";
import { useParams } from "react-router";
import ProductGrid from "~/components/products/ProductGrid";
import SideBar from "~/components/sidebar/SideBar";
import useCollections from "~/hooks/useCollections";
import useProductsByCollection from "~/hooks/useProductsByCollection";
import useProducts from "~/hooks/useProductsByHandle";

const index = () => {
  const { handle } = useParams<{ handle: string }>();
  if (!handle) return <div>No collection selected</div>;

  const {
    data: products,
    isLoading,
    isError,
  } = useProductsByCollection(handle!);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading collections</div>;

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

      <section className="max-w-[var(--setmax-width) relative my-0 mr-auto ml-auto flex min-h-lvw w-full py-4">
        <SideBar />
        <ProductGrid bikes={products?.allBikes ?? []} />
      </section>
    </div>
  );
};

export default index;

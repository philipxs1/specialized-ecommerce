import CollectionLayout from "~/components/layouts/CollectionLayout";

import useCollection from "~/hooks/useCollection";

export default function ClothingRoute() {
  const { data, isLoading, isError } = useCollection("cycling-clothing");

  return (
    <CollectionLayout
      title={data?.title ?? "Bikes"}
      products={data?.products ?? []}
      isLoading={isLoading}
      isError={isError}
      tiles={data?.tiles ?? []}
    />
  );
}

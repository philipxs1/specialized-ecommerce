import { useParams } from "react-router";
import CollectionLayout from "~/components/layouts/CollectionLayout";
import useCollection from "~/hooks/useCollection";

const index = () => {
  const { handle } = useParams<{ handle: string }>();

  if (!handle) return <div>No collection selected</div>;

  const { data, isLoading, isError } = useCollection(handle);
  console.log(data);

  return (
    <CollectionLayout
      title={data?.title}
      products={data?.products ?? []}
      isLoading={isLoading}
      isError={isError}
    />
  );
};

export default index;

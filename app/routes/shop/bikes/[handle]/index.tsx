import { useParams } from "react-router";
import useCollections from "~/hooks/useCollections";

const index = () => {
  const { handle } = useParams();
  const { data: collections, isLoading, isError } = useCollections();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading collections</div>;

  const collection = collections?.find((c) => c.handle === handle);

  if (!collection) return <div>Collection not found</div>;

  return <h1>{collection.title}</h1>;
};

export default index;

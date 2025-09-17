import { useParams } from "react-router";
import useCollection from "~/hooks/useCollection";

const index = () => {
  const { handle } = useParams<{ handle: string }>();

  if (!handle) return <div>No collection selected</div>;

  const { data, isLoading, isError } = useCollection(handle);

  return <h1>{data?.title}</h1>;
};

export default index;

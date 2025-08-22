import Carousel from "~/components/carousel/Carousel";
import useApparelTiles from "~/hooks/useApparelTiles";
import useBikespageTiles from "~/hooks/useBikespageTiles";

export default function ClothingRoute() {
  const { data: tiles, isLoading, isError } = useApparelTiles();

  if (isLoading) return <p>Loading collections...</p>;
  if (isError || !tiles) return <p>Something went wrong loading collections</p>;

  return (
    <div>
      <div className="my-6">
        <h2>Bikes</h2>
      </div>
      <Carousel tiles={tiles} />
    </div>
  );
}

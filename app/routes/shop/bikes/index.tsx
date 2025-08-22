import Carousel from "~/components/carousel/Carousel";
import useBikespageTiles from "~/hooks/useBikespageTiles";

export default function BikesRoute() {
  const { data: tiles, isLoading, isError } = useBikespageTiles();
  console.log(tiles);

  if (isLoading) return <p>Loading collections...</p>;
  if (isError || !tiles) return <p>Something went wrong loading collections</p>;

  return (
    <div>
      <div className="my-6">
        <h2>Bikes</h2>
      </div>
      <Carousel tiles={tiles.bikes} promo={tiles.promos} />
    </div>
  );
}

import Carousel from "~/components/carousel/Carousel";
import useBikes from "~/hooks/useBikes";
import useBikespageTiles from "~/hooks/useBikespageTiles";

export default function BikesRoute() {
  const { data: tiles, isLoading, isError } = useBikespageTiles();
  const {
    data: bikes,
    isLoading: isLoadingBikes,
    isError: isBikesError,
  } = useBikes();

  if (isLoading) return <p>Loading collections...</p>;
  if (isError || !tiles) return <p>Something went wrong loading collections</p>;
  console.log(bikes);

  return (
    <div>
      <div className="mx-6 my-6">
        <h1 className="text-2xl font-bold">
          {bikes?.title}
          &nbsp;
          <span className="text-lg font-normal">
            ({bikes?.allBikes.length})
          </span>
        </h1>
      </div>
      <Carousel tiles={tiles.bikes} promo={tiles.promos} />

      <ul
        id="grid"
        className="grid grid-cols-1 gap-6 px-6 py-4 md:grid-cols-2 lg:grid-cols-3"
      >
        {bikes?.allBikes.map((product, index) => {
          return (
            <li key={index}>
              <article>
                <div className="relative flex h-full flex-col">
                  <a href="">
                    <figure className="bg-white-gray relative flex aspect-[1/1] items-center justify-center overflow-hidden rounded-t-lg">
                      <div>
                        <img
                          src={product.image}
                          alt="product image"
                          className="absolute top-1/2 left-1/2 h-auto max-h-full w-full -translate-x-1/2 -translate-y-1/2 transform rounded-lg"
                        />
                      </div>
                    </figure>
                  </a>
                  <div className="product-card-border rounded-b-lg px-5 pb-3">
                    <div className="pt-6">
                      <h2 className="text-2xl font-bold">{product.title}</h2>
                    </div>
                    <div className="pt-6">
                      <span className="font-bold">${product.price}</span>
                    </div>
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

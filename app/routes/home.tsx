import HeroComponent from "~/components/HomePage/HeroComponent";
import { HERODATA } from "~/data";
import useCollections from "~/hooks/useCollections";

export default function Home() {
  const { data: collections, isLoading, isError } = useCollections();
  if (isLoading) return <p>Loading collections...</p>;
  if (isError) return <p>Something went wrong loading collections</p>;

  console.log(collections); //
  return (
    <div className="relative">
      <section id="component-1">
        {HERODATA.map((item) => (
          <HeroComponent key={item.id} {...item} />
        ))}
      </section>
    </div>
  );
}

import HeroComponent from "~/components/HomePage/HeroComponent";
import { HERODATA } from "~/data";

export default function Home() {
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

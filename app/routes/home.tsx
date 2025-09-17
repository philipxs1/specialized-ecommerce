import HeroComponent from "~/components/home-page/HeroComponent";
import { HERODATA } from "~/data";

import MainCarousel from "~/components/main-carousel/MainCarousel";

export default function Home() {
  return (
    <div className="relative">
      <section id="component-1">
        {HERODATA.map((item) => (
          <HeroComponent key={item.id} {...item} />
        ))}
      </section>
      <section id="component-carousel">
        <div className="relative w-full overflow-hidden">
          <div className="m-auto mx-0 w-full max-w-[2000px] p-6">
            <h2 className="pt-2 pb-8 text-3xl font-semibold">Shop</h2>
            <MainCarousel />
          </div>
        </div>
      </section>
    </div>
  );
}

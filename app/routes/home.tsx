import mobileCelebrate from "../assets/Homepage/mobile_celebrate.webp";
import webCelebrate from "../assets/Homepage/web_celebrate.webp";

export default function Home() {
  return (
    <div className="relative">
      <section id="component-1">
        <div className="@container/hero-banner w-full overflow-y-hidden">
          <div className="relative flex h-auto flex-col items-start justify-center text-left @4xl/hero-banner:h-[610px] @4xl/hero-banner:items-center">
            <picture className="relative inset-0 z-0 aspect-[3/2] w-full object-cover @4xl/hero-banner:absolute @4xl/hero-banner:aspect-auto @4xl/hero-banner:h-full">
              <source srcSet={webCelebrate} media="(min-width: 56rem)" />
              <img
                src={mobileCelebrate}
                alt="Tour the France Celebration Image"
                className="h-full w-full object-cover object-center"
              />
            </picture>
            <div className="z-1 mt-0 mr-auto mb-0 ml-auto flex w-full max-w-full items-center justify-start bg-white p-6 @4xl/hero-banner:w-full @4xl/hero-banner:max-w-[2000px] @4xl/hero-banner:bg-transparent @4xl/hero-banner:p-16">
              <div className="flex w-full max-w-full flex-col items-start @4xl/hero-banner:w-max @4xl/hero-banner:max-w-[580px] @4xl/hero-banner:text-white">
                <h3 className="pb-2 text-3xl font-bold">Tour de Tarmac</h3>
                <h4 className="pb-5 text-2xl font-medium">
                  Thank You Hommes & Femmes!
                </h4>
                <div className="flex w-full flex-col flex-wrap gap-4">
                  <a
                    type="button"
                    href="/"
                    className="relative inline-flex min-h-12 w-full cursor-pointer items-center justify-center rounded-sm bg-black px-6 font-medium whitespace-nowrap text-white @4xl/hero-banner:w-auto @4xl/hero-banner:bg-white @4xl/hero-banner:text-black"
                  >
                    Shop the Winning Gear
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

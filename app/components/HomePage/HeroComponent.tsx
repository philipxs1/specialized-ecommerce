import React from "react";

type HeroProps = {
  mobileImg: string;
  desktopImg: string;
  title: string;
  subtitle: string;
  buttonText: string;
};

const HeroComponent: React.FC<HeroProps> = ({
  mobileImg,
  desktopImg,
  title,
  subtitle,
  buttonText,
}) => {
  return (
    <div className="@container/hero-banner w-full overflow-y-hidden">
      <div className="relative flex h-auto flex-col items-start justify-center text-left @4xl/hero-banner:h-[610px] @4xl/hero-banner:items-center">
        <picture className="relative inset-0 z-0 aspect-[3/2] max-h-[324px] w-full object-cover @4xl/hero-banner:absolute @4xl/hero-banner:aspect-auto @4xl/hero-banner:h-full @4xl/hero-banner:max-h-full">
          <source srcSet={desktopImg} media="(min-width: 56rem)" />
          <img
            src={mobileImg}
            alt="Tour the France Celebration Image"
            className="h-full w-full object-cover object-center"
          />
        </picture>
        <div className="z-1 mt-0 mr-auto mb-0 ml-auto flex w-full max-w-full items-center justify-start bg-white p-6 @4xl/hero-banner:w-full @4xl/hero-banner:max-w-[2000px] @4xl/hero-banner:bg-transparent @4xl/hero-banner:p-16">
          <div className="flex w-full max-w-full flex-col items-start @4xl/hero-banner:w-max @4xl/hero-banner:max-w-[580px] @4xl/hero-banner:text-white">
            <h3 className="pb-2 text-3xl font-bold">{title}</h3>
            <h4 className="pb-5 text-2xl font-medium">{subtitle}</h4>
            <div className="flex w-full flex-col flex-wrap gap-4 @4xl/hero-banner:w-auto">
              <a
                type="button"
                href="/"
                className="relative inline-flex min-h-12 w-full cursor-pointer items-center justify-center rounded-sm bg-black px-6 font-medium whitespace-nowrap text-white @4xl/hero-banner:w-auto @4xl/hero-banner:bg-white @4xl/hero-banner:text-black"
              >
                {buttonText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;

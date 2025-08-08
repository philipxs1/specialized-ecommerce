import mobileCelebrate from "./assets/Homepage/mobile_celebrate.webp";
import desktopCelebrate from "./assets/Homepage/desktop_celebrate.webp";
import mobileDemi from "./assets/Homepage/mobile_demi.webp";
import desktopDemi from "./assets/Homepage/desktop_demi.webp";

type HeroSlide = {
  id: string;
  mobileImg: string;
  desktopImg: string;
  title: string;
  subtitle: string;
  buttonText: string;
};

export const HERODATA: HeroSlide[] = [
  {
    id: "celebrate",
    mobileImg: mobileCelebrate,
    desktopImg: desktopCelebrate,
    title: "Tour de Tarmac",
    subtitle: "Thank You Hommes & Femmes!",
    buttonText: "Shop the Winning Gear",
  },
  {
    id: "demi",
    mobileImg: mobileDemi,
    desktopImg: desktopDemi,
    title: "It All Starts With Dreaming",
    subtitle: "S-Works, Tarmac SL8: Demi Dreaming LTD",
    buttonText: "Start Dreaming",
  },
];

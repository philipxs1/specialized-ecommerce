import useFooterMenus from "~/hooks/useFooterMenus";
import FooterHeader from "./FooterHeader";
import MenuColumn from "./MenuColumn";
import Form from "./Form";
import MobileMenuColumn from "./MobileMenuColumn";

type FooterMenu = {
  title: string;
  items: string[];
};

interface FooterProps {
  footerMenusArray: FooterMenu[];
}

const Footer = ({ footerMenusArray }: FooterProps) => {
  return (
    <div className="bg-black px-6 py-4 text-white">
      <div className="ps-6 pe-6">
        <FooterHeader />
        <nav className="w-full">
          <div className="mb-4 flex flex-col flex-wrap justify-between md:flex-row lg:flex-nowrap">
            {footerMenusArray.map((menu) => (
              <MobileMenuColumn {...menu} key={menu.title} />
            ))}

            {footerMenusArray.map((menu) => (
              <MenuColumn {...menu} key={menu.title} />
            ))}
            <div className="mt-8 flex flex-col md:gap-5 md:max-lg:basis-full md:max-lg:flex-row">
              <Form />
              <div>
                <h2 className="text-white-headers mb-4 font-light">
                  Specialized App
                </h2>
                <div className="flex">
                  <img src="app/assets/app-store-black.svg" alt="" />
                  <img src="app/assets/google-play-black.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Footer;

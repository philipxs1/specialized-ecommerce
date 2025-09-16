import { Link } from "react-router";
import Icon from "~/ui/Icon/Icon";
import LogoSmall from "~/ui/LogoSmall";

const FooterHeader = () => {
  return (
    <div className="border-b-border-bottom mb-8 flex justify-between border-b py-4">
      <div>
        <Link to="/" className="flex w-full items-center">
          <LogoSmall color="white" />
        </Link>
      </div>
      <div className="flex gap-[1rem]">
        <Icon id="instagram" size={20} />

        <Icon id="facebook" size={20} />

        <Icon id="youtube" size={20} />
      </div>
    </div>
  );
};

export default FooterHeader;

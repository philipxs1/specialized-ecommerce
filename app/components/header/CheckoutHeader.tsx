import { useNavigate } from "react-router";
import LogoSmall from "~/ui/LogoSmall";

const CheckoutHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="mx-auto w-full max-w-[1200px] p-6">
      {" "}
      <div className="flex justify-between">
        <div className="flex flex-col items-baseline justify-center gap-5 md:flex-row md:items-center md:gap-10">
          <a href="/">
            <LogoSmall color="black" />
          </a>
          <h4 className="font-medium">Secure Checkout</h4>
        </div>
        <div>
          <button
            onClick={() => navigate("/cart")}
            className="bg-black-lighter cursor-pointer rounded-sm px-4 py-2 text-xs text-white hover:bg-black"
          >
            Edit Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutHeader;

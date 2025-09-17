import { useForm, type SubmitHandler } from "react-hook-form";
import FloatingInput from "../form/FloatingInput";
import type { ShippingInfo } from "~/routes/cart";
import { useEffect } from "react";
import FloatingSelect from "../form/FloatingSelect";

const ShippingForm = ({
  defaultValues,
  onSuccess,
}: {
  defaultValues: ShippingInfo;
  onSuccess: (values: ShippingInfo) => void;
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ShippingInfo>({ defaultValues });

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  return (
    <div>
      <div className="pb-4">
        <h4 className="text-2xl font-bold">Shipping Address</h4>
      </div>
      <form onSubmit={handleSubmit(onSuccess)} className="space-y-4">
        <FloatingInput
          id="country"
          label="Country"
          register={register("country", {
            required: "Country name is required.",
          })}
          error={errors.country}
        />
        <div className="flex justify-between gap-8">
          <FloatingInput
            id="firstName"
            label="First Name"
            register={register("firstName", {
              required: "First name is required.",
            })}
            error={errors.firstName}
          />
          <FloatingInput
            id="phoneNumber"
            label="Phone Number"
            type="tel"
            register={register("phoneNumber", {
              required: "Phone number is required.",
            })}
            error={errors.phoneNumber}
          />
        </div>

        <FloatingInput
          id="streetAddress"
          label="Street and Adress"
          register={register("streetAddress", {
            required: "Street and address are required.",
          })}
          error={errors.streetAddress}
        />

        <FloatingInput
          id="unitNumber"
          label="Flat or Suite Number"
          register={register("unitNumber", {
            required: "Flat or Suite Number are required.",
          })}
          error={errors.unitNumber}
        />
        <FloatingInput
          id="town"
          label="Town"
          register={register("town", {
            required: "Town is required.",
          })}
          error={errors.unitNumber}
        />

        <div className="flex justify-between gap-8">
          <FloatingSelect
            id="state"
            label="State"
            register={register("state", {
              required: "state  is required.",
            })}
            error={errors.state}
          />
          <FloatingInput
            id="postCode"
            label="Post Code"
            register={register("postCode", {
              required: "Post Code is required.",
            })}
            error={errors.postCode}
          />
        </div>

        <button
          type="submit"
          disabled={!isValid}
          className={`w-full rounded py-3 font-bold ${isValid ? "hover:bg-black-darker cursor-pointer" : ""} ${!isValid ? "bg-black-disbaled text-nav-hover" : "bg-black-lighter text-white"}`}
        >
          Continue to Shipping
        </button>
      </form>
    </div>
  );
};

export default ShippingForm;

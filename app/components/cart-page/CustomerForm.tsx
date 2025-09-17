import React, { useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import FloatingInput from "../form/FloatingInput";
import type { CustomerInfo } from "~/routes/cart";

const CustomerForm = ({
  defaultValues,
  onSuccess,
}: {
  defaultValues: CustomerInfo;
  onSuccess: (values: CustomerInfo) => void;
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<CustomerInfo>({ defaultValues });

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  return (
    <form onSubmit={handleSubmit(onSuccess)} className="space-y-4">
      <div className="flex justify-between gap-8">
        <FloatingInput
          id="firstName"
          label="First Name"
          register={register("firstName", {
            required: "First name is required",
          })}
          error={errors.firstName}
        />
        <FloatingInput
          id="lastName"
          label="Last Name"
          register={register("lastName", {
            required: "Last name is required",
          })}
          error={errors.lastName}
        />
      </div>

      <FloatingInput
        id="email"
        label="Email"
        type="email"
        register={register("email", { required: "Email is required" })}
        error={errors.email}
      />

      <FloatingInput
        id="phoneNumber"
        label="Phone Number"
        type="tel"
        register={register("phoneNumber", {
          required: "Phone number is required",
        })}
        error={errors.phoneNumber}
      />

      <button
        type="submit"
        disabled={!isValid}
        className={`w-full rounded py-3 font-bold ${isValid ? "hover:bg-black-darker cursor-pointer" : ""} ${!isValid ? "bg-black-disbaled text-nav-hover" : "bg-black-lighter text-white"}`}
      >
        Continue to Shipping
      </button>
    </form>
  );
};

export default CustomerForm;

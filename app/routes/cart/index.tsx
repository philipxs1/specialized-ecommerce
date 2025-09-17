import { useState } from "react";
import { useSearchParams } from "react-router";

import EditCart from "~/components/cart-page/EditCart";
import EmptyCart from "~/components/cart-page/EmptyCart";

import { useCartStore } from "~/context/useCartStore";

import CustomerForm from "~/components/cart-page/CustomerForm";
import StepWrapper from "~/components/cart-page/StepWrapper";
import CustomerSummary from "~/components/cart-page/CustomerSummary";
import ShippingAddressForm from "~/components/cart-page/ShippingForm";
import ShippingSummary from "~/components/cart-page/ShippingSummary";
import CartSummary from "~/components/cart-page/CartSummary";
import PaymentForm from "~/components/cart-page/PaymentForm";

export interface CustomerInfo {
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
}
export interface ShippingInfo {
  country?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  streetAddress?: string;
  unitNumber?: string;
  town?: string;
  state?: string;
  postCode?: string;
}

const index = () => {
  const items = useCartStore((state) => state.items);
  const totalPrice = useCartStore((state) => state.totalPrice);
  const [data, setData] = useState<{
    customer?: CustomerInfo;
    shipping?: ShippingInfo;
  }>({});

  console.log(items);

  const [searchParams, setSearchParams] = useSearchParams();
  const step = Number(searchParams.get("step")) || 0;

  const setStep = (n: number) => setSearchParams({ step: String(n) });

  if (items.length == 0 && step === 0) {
    return <EmptyCart />;
  }

  if (step === 0) {
    return <EditCart setStep={setStep} />;
  }

  return (
    <div className="mx-auto flex w-full max-w-[1200px] p-6">
      <div className="flex w-full flex-col md:flex-row">
        {/* Left column: stepper */}
        <div className="w-full md:mr-8 md:w-[45%]">
          {/* Step 1 */}

          {step === 1 ? (
            <StepWrapper
              title="Tell us who's placing the order"
              stepNumber={1}
              currentStep={step}
              subtitle="We will use these details to keep you informed on your delivery"
            >
              <CustomerForm
                defaultValues={data.customer ?? {}}
                onSuccess={(values) => {
                  setData((prev) => ({ ...prev, customer: values }));
                  setStep(2);
                }}
              />
            </StepWrapper>
          ) : (
            step > 1 && (
              <CustomerSummary
                data={{
                  firstName: data.customer?.firstName,
                  lastName: data.customer?.lastName,
                  email: data.customer?.email,
                  phoneNumber: data.customer?.phoneNumber,
                }}
                onEdit={() => setStep(1)}
              />
            )
          )}
          {/* Step 2 */}

          {step === 2 || step < 2 ? (
            <StepWrapper
              title="Confirm how you would like to receive your order"
              stepNumber={2}
              currentStep={step}
            >
              <ShippingAddressForm
                defaultValues={{ ...data.customer, ...data.shipping }}
                onSuccess={(values) => {
                  setData((prev) => ({ ...prev, shipping: values }));
                  setStep(3);
                }}
              />
            </StepWrapper>
          ) : (
            step > 2 && (
              <ShippingSummary
                data={{
                  country: data.shipping?.country,
                  firstName: data.shipping?.firstName,
                  lastName: data.shipping?.lastName,
                  phoneNumber: data.shipping?.phoneNumber,
                  streetAddress: data.shipping?.streetAddress,
                  unitNumber: data.shipping?.unitNumber,
                  town: data.shipping?.town,
                  postCode: data.shipping?.postCode,
                  state: data.shipping?.state,
                }}
                onEdit={() => setStep(2)}
              />
            )
          )}

          {/* Step 3 */}

          <StepWrapper
            title="How would you like to pay?"
            stepNumber={3}
            currentStep={step}
          >
            <PaymentForm totalAmount={totalPrice()} />
          </StepWrapper>
        </div>

        {/* Right column: order summary */}
        <div className="rounded-sm md:ml-8 md:w-[55%]">
          <CartSummary />
        </div>
      </div>
    </div>
  );
};
export default index;

import React from "react";
import type { CustomerInfo, ShippingInfo } from "~/routes/cart";

type ShippingSummaryProps = {
  data: ShippingInfo;
  onEdit: () => void;
};

const ShippingSummary: React.FC<ShippingSummaryProps> = ({ data, onEdit }) => {
  const {
    country,
    firstName,
    lastName,
    phoneNumber,
    streetAddress,
    unitNumber,
    town,
    state,
    postCode,
  } = data;
  return (
    <div className="pb-4">
      <div className="border-black-lighter flex items-center justify-between border-t-1 py-4">
        <h4 className="font-bold">Delivery Info</h4>
        <button onClick={onEdit} className="cursor-pointer font-bold underline">
          Edit
        </button>
      </div>

      <div className="flex items-center justify-center rounded-md border-2 border-black py-4">
        <div>
          <p>
            {firstName} {lastName}
          </p>
          <p>{phoneNumber}</p>
          <p>
            {streetAddress}, {unitNumber} {town}, {state}, {postCode}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShippingSummary;

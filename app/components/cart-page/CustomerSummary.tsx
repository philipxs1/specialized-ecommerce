import React from "react";
import type { CustomerInfo } from "~/routes/cart";

type CustomerSummaryProps = {
  data: CustomerInfo;
  onEdit: () => void;
};

const CustomerSummary: React.FC<CustomerSummaryProps> = ({ data, onEdit }) => {
  const { firstName, lastName, phoneNumber, email } = data;

  const hasData = Object.values(data).some((v) => v && v.trim() !== "");
  return (
    <div className="pb-4">
      <div className="border-black-lighter flex items-center justify-between border-t-1 py-4">
        <h4 className="font-bold">Your Information</h4>
        <button onClick={onEdit} className="cursor-pointer font-bold underline">
          Edit
        </button>
      </div>

      {hasData && (
        <div className="py-5">
          <p>
            {firstName} {lastName}
          </p>
          <p>{phoneNumber}</p>
          <p>{email}</p>
        </div>
      )}
    </div>
  );
};

export default CustomerSummary;

import React from "react";
import { Navigate, useNavigate } from "react-router";
import LogoSmall from "~/ui/LogoSmall";

const CompletedHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="mx-auto w-full max-w-[1200px] p-6">
      <div className="flex justify-between">
        <div>
          <div>
            <LogoSmall color="black" />
          </div>
        </div>
        <div>
          <button
            onClick={() => navigate("/")}
            className="bg-black-lighter cursor-pointer rounded-sm px-4 py-2 text-xs text-white hover:bg-black"
          >
            Back to home
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompletedHeader;

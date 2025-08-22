import React from "react";
import Icon from "~/ui/Icon/Icon";

const Form = () => {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-white-headers mb-4 font-light">Newsletter</h2>
      <div className="relative flex">
        <div className="w-full">
          <input
            aria-label="email"
            name="email"
            type="text"
            placeholder="Email Address"
            className="bg-black-lighter h-[56px] w-full rounded-l-md px-4 py-2 font-normal text-white placeholder:text-white focus:outline-0"
          />
        </div>
        <button className="bg-black-lighter float-left h-auto cursor-pointer rounded-r-md px-4 py-2 text-white placeholder:text-white">
          <Icon id="arrow-right" size={24} />
        </button>
      </div>
      <div className="my-4">
        <p className="text-xs">
          By submitting your email address you agree to the{" "}
          <a className="underline">Terms of Use</a>
        </p>
      </div>
    </form>
  );
};

export default Form;

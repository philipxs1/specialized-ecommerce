import React, { useState } from "react";

function SearchForm() {
  const [search, setSearch] = useState("");

  function handleSubmit(event: any) {
    event.preventDefault();
    console.log("hi");
  }

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <label htmlFor="default-search" />
      <div className="relative block">
        <div className="absolute top-0 bottom-0 left-0 m-auto h-6 w-6 cursor-pointer pl-2">
          <svg
            className="h-6 w-6 text-black dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="text"
          name="search"
          id="default-search"
          placeholder="What are you looking for?"
          className="bg-gray-primary block h-8 min-w-2xs rounded-sm border-none p-[5px] pl-10 text-xs inset-shadow-xs placeholder:text-xs focus:outline-none"
        />
      </div>
    </form>
  );
}

export default SearchForm;

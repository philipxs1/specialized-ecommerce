import React, { useState } from "react";
import Icon from "~/ui/Icon/Icon";

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
          <Icon id="search" strokeWidth={1} size={24} />
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

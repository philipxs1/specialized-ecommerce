import { useEffect, useRef, useState } from "react";
import Icon from "~/ui/Icon/Icon";

function SearchForm({
  searchQuery,
  setSearchQuery,
  openSearchModal,
  handleSubmit,
}) {
  useEffect(() => {}, []);

  return (
    <div className="relative h-8">
      <div className="bg-gray-border absolute h-full max-w-[786px] min-w-[300px] rounded-[4px]">
        <form
          action="search"
          className="relative flex w-full items-center rounded-sm"
          onSubmit={handleSubmit}
        >
          <button
            type="submit"
            className="absolute top-0 bottom-0 left-0 flex h-full w-8 cursor-pointer items-center justify-center"
          >
            <Icon id="search" strokeWidth={1} />
          </button>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              if (e.target.value.length > 0) {
                openSearchModal();
              }
            }}
            placeholder="What are you looking for?"
            className="relative h-full grow border-none px-[5px] py-[5px] pl-8 outline-none placeholder:text-xs"
          />
        </form>
      </div>
    </div>
  );
}

export default SearchForm;

import React, { useEffect, useRef, useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import Icon from "~/ui/Icon/Icon";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchModal = ({
  isOpen,
  onClose,
  searchQuery,
  setSearchQuery,
}: Props) => {
  const modalRef = useRef<any>(null);
  const searchInputRef = useRef<any>(null);

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="bg-modal-bg fixed inset-0 top-0 right-0 bottom-0 left-0 z-50 flex items-start justify-start overflow-auto pt-[32px]">
      <div className="w-[225px]"></div>
      <div
        ref={modalRef}
        className="bg-primary w-full max-w-[800px] flex-1 grow rounded-md p-2 opacity-100 shadow-xl"
      >
        <div className="flex items-center justify-center border-b border-gray-200 p-4">
          <div className="relative flex flex-grow items-center">
            <input
              ref={searchInputRef}
              type="text"
              name="search"
              placeholder="What are you looking for?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-gray-border w-full rounded-md border border-gray-300 p-1 pl-3 focus:outline-none"
            />
            <div className="absolute inset-y-0 right-0 flex items-center justify-between gap-2 pr-2 leading-none">
              <button
                aria-label="Clear search input"
                className="bg-nav-hover flex cursor-pointer appearance-none items-center justify-center rounded-full p-1"
                onClick={() => setSearchQuery("")}
              >
                <Icon id="close" strokeWidth={2} size={10} />
              </button>

              <span
                className="block h-5 w-px bg-gray-500"
                aria-hidden="true"
              ></span>

              <button type="submit" className="cursor-pointer">
                <Icon id="search" strokeWidth={1} size={24} />
              </button>
            </div>
          </div>

          <button className="cursor-pointer pl-2" onClick={onClose}>
            <Icon id="close" strokeWidth={2} />
          </button>
        </div>
        <div className="mt-6 text-center">
          <button
            onClick={() => console.log("hi Kyle")}
            className="w-full rounded-md bg-gray-700 px-6 py-3 text-white hover:bg-gray-800 focus:ring-2 focus:ring-gray-500 focus:outline-none"
          >
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;

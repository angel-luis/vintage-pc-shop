import { useEffect, useRef, useState } from "react";

import Button from "@/components/common/button";

export default function ShopSortButton({
  sortByPricing,
}: {
  sortByPricing: (filter: "asc" | "desc") => void;
}) {
  const sortRef = useRef<HTMLDivElement>(null);

  const [isSortOpen, setIsSortOpen] = useState(false);

  function handleClickOutside(event: MouseEvent) {
    if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
      setIsSortOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative">
      <Button
        onClick={() => setIsSortOpen(!isSortOpen)}
        type="button"
        style="primary"
      >
        <svg
          className="-ms-0.5 me-2 h-4 w-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 4v16M7 4l3 3M7 4 4 7m9-3h6l-6 6h6m-6.5 10 3.5-7 3.5 7M14 18h4"
          />
        </svg>
        Sort
        <svg
          className={`-me-0.5 ms-2 h-4 w-4 transition ${
            isSortOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 9-7 7-7-7"
          />
        </svg>
      </Button>
      {isSortOpen && (
        <div
          ref={sortRef}
          className="absolute w95-border w-full sm:w-48 sm:right-0 top-8 z-10 mt-2 rounded-sm bg-gray-200 p-2 shadow-lg space-y-2"
        >
          <Button
            onClick={() => sortByPricing("desc")}
            style="secondary"
            widthFull
          >
            Higher price
          </Button>
          <Button
            onClick={() => sortByPricing("asc")}
            style="secondary"
            widthFull
          >
            Lower price
          </Button>
        </div>
      )}
    </div>
  );
}

import { useState } from "react";

import Button from "@/components//common/button";
import Input from "@/components/common/input";

export default function ShopSideNavigation({
  searchByTitle,
}: {
  searchByTitle: (title: string) => void;
}) {
  const [showFilters, setShowFilters] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setSearchValue(value);
    searchByTitle(value);
  }

  return (
    <div>
      <div className="md:hidden">
        <Button
          onClick={() => setShowFilters(!showFilters)}
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
              strokeWidth="2"
              d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z"
            />
          </svg>
          Filters
          <svg
            className={`-me-0.5 ms-2 h-4 w-4 transition ${
              showFilters ? "rotate-180" : ""
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
      </div>
      <aside
        className={`${
          showFilters ? "block" : "hidden"
        } relative min-w-52 md:block bg-gray-200 p-4 text-black`}
      >
        <div className="w95-border space-y-4">
          <Input
            name="search"
            type="search"
            placeholder="Search computer..."
            value={searchValue}
            onChange={(e) => handleSearch(e)}
          />

          <Button style="secondary" widthFull>
            <div className="w-full flex items-center justify-between font-display text-2xl font-semibold">
              Brands{" "}
              <svg
                data-accordion-icon
                className="h-5 w-5 shrink-0 rotate-180"
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
                  d="m5 15 7-7 7 7"
                />
              </svg>
            </div>
          </Button>
        </div>
      </aside>
    </div>
  );
}

"use client";

import { Search } from "lucide-react";

type Filter =
  | "All"
  | "Pending"
  | "Approved"
  | "Rejected";

type Props = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  filter: Filter;
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
};

export default function Toolbar({
  search,
  setSearch,
  filter,
  setFilter,
}: Props) {
  const filters: Filter[] = [
    "All",
    "Pending",
    "Approved",
    "Rejected",
  ];

  return (
    <div className="mb-8 flex flex-col gap-5 rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl md:flex-row md:items-center md:justify-between">

      {/* Search */}
      <div className="relative w-full md:max-w-md">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
        />

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name, email or enrollment..."
          className="
            w-full
            rounded-2xl
            border
            border-white/10
            bg-black/30
            py-3
            pl-11
            pr-4
            text-white
            placeholder:text-zinc-500
            outline-none
            transition-all
            duration-300
            focus:border-violet-500
            focus:ring-2
            focus:ring-violet-500/30
          "
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">

        {filters.map((item) => {
          const active = filter === item;

          return (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`
                rounded-full
                px-5
                py-2
                text-sm
                font-medium
                transition-all
                duration-300
                ${
                  active
                    ? "bg-violet-600 text-white shadow-lg shadow-violet-600/30"
                    : "border border-white/10 text-zinc-400 hover:border-violet-500 hover:text-white hover:bg-white/5"
                }
              `}
            >
              {item}
            </button>
          );
        })}

      </div>

    </div>
  );
}
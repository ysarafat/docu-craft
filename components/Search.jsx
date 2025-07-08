"use client";

import useDebounce from "@/hooks/useDebounce";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SearchResult from "./SearchResult";

export default function Search({ docs }) {
  const router = useRouter();
  const [searchResult, setSearchResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    doSearch(value);
  };
  const doSearch = useDebounce((term) => {
    const found = docs.filter((doc) => {
      const title = doc.title.toLowerCase();
      // const content = doc.content.toLowerCase();
      return title.includes(term.toLowerCase());
      // content.includes(term.toLowerCase())
    });
    console.log(found);
    setSearchResult(found);
  }, 500);

  const closeSearchResult = (e) => {
    e.preventDefault();
    setSearchTerm("");
    router.push(e.target.href);
  };

  return (
    <>
      <div class="lg:block lg:max-w-md lg:flex-auto relative">
        <button
          type="button"
          class="focus:[&amp;:not(:focus-visible)]:outline-none hidden h-8 w-full items-center gap-2 rounded-full bg-white pl-2 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 lg:flex"
        >
          <Image
            src="/search.svg"
            class="h-5 w-5"
            width={50}
            height={50}
            alt="search"
          />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => handleChange(e)}
            placeholder="Search..."
            class="flex-1 focus:border-none focus:outline-none"
          />
        </button>
      </div>
      {searchTerm && searchTerm.trim().length > 0 && (
        <SearchResult
          results={searchResult}
          term={searchTerm}
          closeSearchResult={closeSearchResult}
        />
      )}
    </>
  );
}

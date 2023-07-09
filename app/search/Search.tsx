"use client";
import { useRouter } from "next/navigation";
import React, { FormEvent, useRef } from "react";

function Search() {
  const inputText = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const text = inputText.current!.value;
    router.push(`/search/${text}`);
  };

  return (
    <form onSubmit={handleSearch}>
      <input type="text" placeholder="Search" ref={inputText} />
      <button
        type="submit"
        className="bg-blue-400 text-white font-bold py-2 px-4 rounded-lg"
      >
        Search
      </button>
    </form>
  );
}

export default Search;

import { log } from "console";
import React from "react";

type PageProps = {
  params: {
    searchTerm: string;
  };
};

type SearchResults = {
  organic_results: [
    {
      position: number;
      title: string;
      link: string;
      thumbnail: string;
      snippet: string;
    }
  ];
};
const Search = async (searchTerm: string) => {
  console.log(searchTerm);

  const res = await fetch(
    `https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.API_KEY}`
  );
  console.log(process.env.NEXT_PUBLIC_API_KEY);

  const data: SearchResults = await res.json();
  log(data);
  return data;
};

async function SearchResults({ params: { searchTerm } }: PageProps) {
  const searchResults = await Search(searchTerm);
  return (
    <div>
      <h1>Search Results for {searchTerm}</h1>
      {searchResults.organic_results.map((result) => (
        <div
          className="p-10 bg-yellow-200 border-2 m-2 shadow
-lg"
        >
          <p>
            #{result.position}: {result.title}
          </p>
          <p>{result.snippet}</p>
          <p className="border-t border-black mt-5 text-right">{result.link}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;

import React, { useState } from "react";

export default function Search(props) {
  const [search, setSearch] = useState("");

  return (
    <div>
      <form className="w-full flex justify-center">
        <div className="flex items-center border-b border-yellow-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-96 text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search pokemon"
            aria-label="Full name"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="flex-shrink-0 bg-yellow-500 hover:bg-yellow-700 border-yellow-500 hover:border-yellow-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="button"
            onClick={(e) => props.getPokemon(search)}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

import React, { useEffect, useRef } from "react";
import { useKey } from "../../custom-hooks/useKey";

const SearchInput = ({ query, setQuery }) => {
  const inputEl = useRef(null);


  useKey("Enter",()=>{
    if(document.activeElement === inputEl.current) return;
    inputEl.current.focus();
    setQuery("");
  })


  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
};

export default SearchInput;

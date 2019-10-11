import React, { useState, useEffect } from "react";

import { useFetchQuotes } from "../hooks/useFetchES";
import TextSearch from "./Inputs/TextSearch";
import Results from "./Outputs/ListResults";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResult] = useState([]);

  // APIs
  const [quotes, doFetchQuotes] = useFetchQuotes("hello");

  // fetch logic
  useEffect(() => {
    doFetchQuotes(query);
  }, [query]);

  // result logic
  useEffect(() => {
    setResult([quotes]);
  }, [quotes]);

  return (
    <>
      <TextSearch onQuery={setQuery} />
      <Results results={results} />
    </>
  );
};

export default Search;

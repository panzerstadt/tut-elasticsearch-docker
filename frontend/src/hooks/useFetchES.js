import useFetch from "./useFetch";

export const useFetchQuotes = () => {
  const url = query => `http://localhost:9200/quotes?text=${query}`;
  const [state, doFetch] = useFetch(url("hello"));

  const doFetchQuotes = query => {
    if (query.length > 0 && typeof query === "string") {
      doFetch(url(query));
    }
  };

  return [state, doFetchQuotes];
};

// useFetch — a data-fetching hook that uses useEffect.
// Goal: fetch JSON from a URL, and track loading/error/data state.
//
// TODO 1: import useState and useEffect from "react"
// TODO 2: create three pieces of state: `data` (starts null), `loading` (starts true),
//         `error` (starts null)
// TODO 3: inside a useEffect that depends on [url]:
//         - set loading to true, error to null
//         - fetch(url), convert the response with .json()
//         - on success: store the result in `data`, set loading to false
//         - on failure (.catch): store the error message in `error`, set loading to false
// TODO 4: return { data, loading, error }
//
// Used by: src/components/FetchDemo.jsx, which fetches a random joke from
// https://api.chucknorris.io/jokes/random
import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [url]);
  return { data, loading, error};
}

import { useState } from "react";
import { useFetch } from "../hooks/useFetch.js";

export default function FetchDemo() {
  const [nonce, setNonce] = useState(0);
  const { data, loading, error } = useFetch(
    `https://api.chucknorris.io/jokes/random?nonce=${nonce}`,
  );

  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">3. useFetch</h2>
      <p className="mt-1 text-sm text-slate-500">
        Fill in <code className="rounded bg-slate-100 px-1 py-0.5">src/hooks/useFetch.js</code>{" "}
        to load a random joke from a public API.
      </p>

      <div className="mt-4 min-h-12 text-sm text-slate-700">
        {loading && "Loading..."}
        {error && <span className="text-red-600">Error: {error}</span>}
        {!loading && !error && data && <p>{data.value}</p>}
        {!loading && !error && !data && (
          <span className="text-slate-400">No data yet — fill in the hook above.</span>
        )}
      </div>

      <button
        onClick={() => setNonce((n) => n + 1)}
        className="mt-3 rounded-md bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-slate-200"
      >
        Get another joke
      </button>
    </section>
  );
}

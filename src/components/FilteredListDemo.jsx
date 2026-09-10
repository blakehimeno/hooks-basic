import { useState } from "react";
import { useFilteredList } from "../hooks/useFilteredList.js";

const ANIMALS = [
  { id: 1, name: "Otter" },
  { id: 2, name: "Owl" },
  { id: 3, name: "Ocelot" },
  { id: 4, name: "Badger" },
  { id: 5, name: "Bison" },
  { id: 6, name: "Falcon" },
];

export default function FilteredListDemo() {
  const [query, setQuery] = useState("");
  const filtered = useFilteredList(ANIMALS, query);

  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">6. useMemo — useFilteredList</h2>
      <p className="mt-1 text-sm text-slate-500">
        Fill in{" "}
        <code className="rounded bg-slate-100 px-1 py-0.5">src/hooks/useFilteredList.js</code>{" "}
        to filter this list as you type.
      </p>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Filter animals..."
        className="mt-4 w-full rounded-md border border-slate-200 px-3 py-1.5 text-sm text-slate-900 outline-none focus:border-slate-400"
      />

      <ul className="mt-3 space-y-1 text-sm text-slate-700">
        {filtered.length === 0 && <li className="text-slate-400">No matches.</li>}
        {filtered.map((animal) => (
          <li key={animal.id} className="rounded-md bg-slate-50 px-3 py-1.5">
            {animal.name}
          </li>
        ))}
      </ul>
    </section>
  );
}

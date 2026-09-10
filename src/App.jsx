import { useState } from "react";
import Header from "./components/Header.jsx";
import Basics from "./pages/Basics.jsx";
import MoreHooks from "./pages/MoreHooks.jsx";

const PAGES = {
  basics: { label: "Basics", Component: Basics },
  more: { label: "More Hooks", Component: MoreHooks },
};

export default function App() {
  const [page, setPage] = useState("basics");
  const { Component } = PAGES[page];

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="mx-auto max-w-2xl px-4 py-8">
        <nav className="mb-6 flex gap-2">
          {Object.entries(PAGES).map(([key, { label }]) => (
            <button
              key={key}
              onClick={() => setPage(key)}
              className={
                "rounded-md px-3 py-1.5 text-sm font-medium " +
                (page === key
                  ? "bg-slate-900 text-white"
                  : "bg-white text-slate-600 hover:bg-slate-100")
              }
            >
              {label}
            </button>
          ))}
        </nav>
        <Component />
      </main>
    </div>
  );
}

import { useCounter } from "../hooks/useCounter.js";

export default function CounterDemo() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">1. useCounter</h2>
      <p className="mt-1 text-sm text-slate-500">
        Fill in <code className="rounded bg-slate-100 px-1 py-0.5">src/hooks/useCounter.js</code>{" "}
        to make these buttons work.
      </p>

      <div className="mt-4 flex items-center gap-3">
        <button
          onClick={decrement}
          className="rounded-md bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-slate-200"
        >
          −
        </button>
        <span className="min-w-8 text-center text-xl font-medium text-slate-900">
          {count}
        </span>
        <button
          onClick={increment}
          className="rounded-md bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-slate-200"
        >
          +
        </button>
        <button
          onClick={reset}
          className="ml-2 rounded-md px-3 py-1.5 text-sm text-slate-500 hover:bg-slate-100"
        >
          reset
        </button>
      </div>
    </section>
  );
}

import { useToggle } from "../hooks/useToggle.js";

export default function ToggleDemo() {
  const [isOpen, toggle] = useToggle(false);

  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">2. useToggle</h2>
      <p className="mt-1 text-sm text-slate-500">
        Fill in <code className="rounded bg-slate-100 px-1 py-0.5">src/hooks/useToggle.js</code>{" "}
        to make this button show/hide the panel below.
      </p>

      <button
        onClick={toggle}
        className="mt-4 rounded-md bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-slate-200"
      >
        {isOpen ? "Hide" : "Show"} details
      </button>

      {isOpen && (
        <div className="mt-3 rounded-md bg-slate-50 p-3 text-sm text-slate-600">
          You flipped the boolean. This panel is controlled entirely by
          `isOpen` coming out of your hook.
        </div>
      )}
    </section>
  );
}

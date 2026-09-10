import { useTheme } from "../hooks/useTheme.js";

export default function ThemeDemo() {
  const { theme, toggleTheme } = useTheme();

  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">5. useContext — useTheme</h2>
      <p className="mt-1 text-sm text-slate-500">
        Fill in <code className="rounded bg-slate-100 px-1 py-0.5">src/hooks/useTheme.js</code>{" "}
        to read theme state from context instead of props.
      </p>

      <div
        className={
          "mt-4 flex items-center justify-between rounded-md border p-4 transition-colors " +
          (theme === "dark"
            ? "border-slate-700 bg-slate-900 text-slate-100"
            : "border-slate-200 bg-white text-slate-900")
        }
      >
        <span className="text-sm">Current theme: {theme}</span>
        <button
          onClick={toggleTheme}
          className="rounded-md bg-slate-100 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-200"
        >
          Toggle theme
        </button>
      </div>
    </section>
  );
}

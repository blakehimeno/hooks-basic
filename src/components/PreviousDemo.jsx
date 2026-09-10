import { useState } from "react";
import { usePrevious } from "../hooks/usePrevious.js";

export default function PreviousDemo() {
  const [text, setText] = useState("");
  const previousText = usePrevious(text);

  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">4. useRef — usePrevious</h2>
      <p className="mt-1 text-sm text-slate-500">
        Fill in <code className="rounded bg-slate-100 px-1 py-0.5">src/hooks/usePrevious.js</code>{" "}
        to track the last value of this input.
      </p>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
        className="mt-4 w-full rounded-md border border-slate-200 px-3 py-1.5 text-sm text-slate-900 outline-none focus:border-slate-400"
      />

      <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
        <div className="rounded-md bg-slate-50 p-3">
          <div className="text-xs uppercase text-slate-400">Current</div>
          <div className="mt-1 text-slate-700">{text || <em className="text-slate-400">empty</em>}</div>
        </div>
        <div className="rounded-md bg-slate-50 p-3">
          <div className="text-xs uppercase text-slate-400">Previous</div>
          <div className="mt-1 text-slate-700">
            {previousText || <em className="text-slate-400">empty</em>}
          </div>
        </div>
      </div>
    </section>
  );
}

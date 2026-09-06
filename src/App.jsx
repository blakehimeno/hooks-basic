import Header from "./components/Header.jsx";
import CounterDemo from "./components/CounterDemo.jsx";
import ToggleDemo from "./components/ToggleDemo.jsx";
import FetchDemo from "./components/FetchDemo.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="mx-auto max-w-2xl space-y-4 px-4 py-8">
        <CounterDemo />
        <ToggleDemo />
        <FetchDemo />
      </main>
    </div>
  );
}

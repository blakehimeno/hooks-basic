import CounterDemo from "../components/CounterDemo.jsx";
import ToggleDemo from "../components/ToggleDemo.jsx";
import FetchDemo from "../components/FetchDemo.jsx";

export default function Basics() {
  return (
    <div className="space-y-4">
      <CounterDemo />
      <ToggleDemo />
      <FetchDemo />
    </div>
  );
}

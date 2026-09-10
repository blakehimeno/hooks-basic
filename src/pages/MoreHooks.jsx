import { ThemeProvider } from "../hooks/ThemeContext.jsx";
import PreviousDemo from "../components/PreviousDemo.jsx";
import ThemeDemo from "../components/ThemeDemo.jsx";
import FilteredListDemo from "../components/FilteredListDemo.jsx";

export default function MoreHooks() {
  return (
    <ThemeProvider>
      <div className="space-y-4">
        <PreviousDemo />
        <ThemeDemo />
        <FilteredListDemo />
      </div>
    </ThemeProvider>
  );
}

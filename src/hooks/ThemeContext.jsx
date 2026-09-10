// ThemeContext — plumbing for the useContext exercise.
// This file is provided for you (not a TODO) so you can focus on useTheme.js.
//
// Used by: src/hooks/useTheme.js, src/pages/MoreHooks.jsx
import { createContext, useState } from "react";

export const ThemeContext = createContext(undefined);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

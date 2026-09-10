// useTheme — read the current theme via useContext.
// Goal: give components a simple way to read { theme, toggleTheme } without
// prop-drilling it down from the top of the tree.
//
// TODO 1: import useContext from "react" and ThemeContext from "./ThemeContext.jsx"
// TODO 2: read the current context value with useContext
// TODO 3: if the value is undefined (meaning this hook was called outside a
//         <ThemeProvider>), throw new Error("useTheme must be used within a ThemeProvider")
// TODO 4: return the context value
//
// Used by: src/components/ThemeDemo.jsx, which is rendered inside a
// <ThemeProvider> in src/pages/MoreHooks.jsx

export function useTheme() {
  return { theme: "light", toggleTheme: () => {} };
}

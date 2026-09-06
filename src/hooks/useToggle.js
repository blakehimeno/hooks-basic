// useToggle — a boolean state hook.
// Goal: manage an on/off value, with a function to flip it.
//
// TODO 1: import useState from "react"
// TODO 2: create a piece of state called `value`, initialized to `initialValue`
// TODO 3: write `toggle` — flips `value` between true and false
//         hint: setValue((prev) => !prev)
// TODO 4: return [value, toggle] (an array, like useState itself does)
//
// Used by: src/components/ToggleDemo.jsx

export function useToggle(initialValue = false) {
  return [initialValue, () => {}];
}

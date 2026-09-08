// useCounter — your first custom hook.
// Goal: manage a number in state, with functions to change it.
//
import { useState } from "react";


// TODO 1: import useState from "react"
// TODO 2: create a piece of state called `count`, initialized to `initialValue`
// TODO 3: write `increment` — increases count by 1
// TODO 4: write `decrement` — decreases count by 1
// TODO 5: write `reset` — sets count back to `initialValue`
// TODO 6: return { count, increment, decrement, reset } so components can use them
//
// Used by: src/components/CounterDemo.jsx

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  return {
    count,
    increment: () => setCount((prev) => prev + 1),
    decrement: () => setCount((prev) => prev - 1),
    reset: () => setCount(initialValue),
  };
}

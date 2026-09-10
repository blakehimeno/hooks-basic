// usePrevious — track the previous value of something, using useRef.
// Goal: return whatever `value` was on the PREVIOUS render (undefined on the first).
//
// TODO 1: import useRef and useEffect from "react"
// TODO 2: create a ref with useRef() — no initial value needed
// TODO 3: inside a useEffect that depends on [value]:
//         - set ref.current = value
//         (this runs AFTER the render, so during render, ref.current still
//         holds the value from the render before this one)
// TODO 4: return ref.current
//
// Used by: src/components/PreviousDemo.jsx
// Key idea: updating a ref does NOT trigger a re-render — that's exactly
// why it can hold "last render's value" without causing an extra render loop.
import { useRef, useEffect } from "react";


export function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

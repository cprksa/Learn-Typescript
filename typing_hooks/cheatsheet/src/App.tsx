import { useCallback, useRef, useEffect } from "react";

function Foo() {
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      /* ... */
    }, 1000);
    return () => {
      if (intervalRef.current !== null) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <button
      onClick={() => {
        /* clearInterval the ref */
      }}
    >
      Cancel timer
    </button>
  );
}

export default function App() {
  const memoizedCallback = useCallback((param1: string, param2: number) => {
    console.log(param1, param2);
    return { ok: true };
  }, []);
  /**
   * VSCode will show the following type:
   * const memoizedCallback:
   *  (param1: string, param2: number) => { ok: boolean }
   */

  return (
    <div>
      <h1>Welcome to the Cheatsheet App</h1>
      <button onClick={() => memoizedCallback("Hello", 42)}>Click Me</button>
      <Foo />
    </div>
  );
}

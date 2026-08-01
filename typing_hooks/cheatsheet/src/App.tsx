import { useCallback } from "react";

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
    </div>
  );
}

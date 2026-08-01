import { useCallback, useEffect } from "react";

function DelayedEffect(props: { timerMs: number }) {
  const { timerMs } = props;

  useEffect(() => {
    setTimeout(() => {
      /* do stuff */
    }, timerMs);
  }, [timerMs]);
  // now wrapped in curly braces
  return null;
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
      <DelayedEffect timerMs={1000} />
    </div>
  );
}

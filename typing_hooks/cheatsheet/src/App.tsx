import { useCallback, useRef, useEffect } from "react";

function Foo() {
  // - If possible, prefer as specific as possible. For example, HTMLDivElement
  //   is better than HTMLElement and way better than Element.
  // - Technical-wise, this returns RefObject<HTMLDivElement>
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Note that ref.current may be null. This is expected, because you may
    // conditionally render the ref-ed element, or you may forget to assign it
    if (!divRef.current) throw Error("divRef is not assigned");

    // Now divRef.current is sure to be HTMLDivElement
    /* doSomethingWith(divRef.current); */
  });

  // Give the ref to an element so React can manage it for you
  return <div ref={divRef}>etc</div>;
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

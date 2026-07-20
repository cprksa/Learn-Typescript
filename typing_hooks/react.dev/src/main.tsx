import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

function useCallbackFake<T>(callback: T): T {
  return callback;
}

const f1 = useCallbackFake<(a: number, b: number) => number>((a, b) => a + b);
const f2 = useCallbackFake((a: number, b: number) => a + b);

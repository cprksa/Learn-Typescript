import { use } from "react";
import { ThemeContext } from "./ThemeContext";

export const MyComponent = () => {
  const theme = use(ThemeContext);

  return <p>The current theme is {theme}.</p>;
};

import { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import type { ThemeContextType } from "./ThemeContext";
import { MyComponent } from "./Components";

export default function App() {
  const [theme, setTheme] = useState<ThemeContextType>("light");
  const handleThemeChange: React.ChangeEventHandler<HTMLSelectElement> = (
    e,
  ) => {
    setTheme(e.currentTarget.value as ThemeContextType);
  };

  return (
    <>
      <select name="theme" value={theme} onChange={handleThemeChange}>
        <option value="light">Light Mode</option>
        <option value="dark">Dark Mode</option>
      </select>
      <ThemeContext value={theme}>
        <MyComponent />
      </ThemeContext>
    </>
  );
}

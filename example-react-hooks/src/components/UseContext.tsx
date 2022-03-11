import { createContext, useState } from "react";
import Content from "./Content";

export const ThemeContext: React.Context<{}> = createContext({});

/**
 * 1. Create context
 * 2. Provider
 * 3. Consumer
 */
export default function ExampleUseContext() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <button onClick={toggleTheme}>Toggle</button>
        <Content />
      </div>
    </ThemeContext.Provider>
  );
}

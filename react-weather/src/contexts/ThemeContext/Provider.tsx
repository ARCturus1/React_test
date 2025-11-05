import { useState, useEffect, type PropsWithChildren } from "react";
import { ThemeContext } from "./Context";

export function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<string>(() => {
    // Get saved theme from localStorage on initial render
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "dark";
  });

  // Save theme to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

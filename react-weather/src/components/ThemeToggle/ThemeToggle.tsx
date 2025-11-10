import { Sun, Moon } from "lucide-react";
import { useThemeContext } from "../../contexts/ThemeContext";
import "./ThemeToggle.css";
import { useEffect } from "react";

const root = document.getElementById('root');

export function ThemeToggle() {
  const { theme, setTheme } = useThemeContext();

  useEffect(() => {
    root?.classList.add(theme === "dark" ? "dark" : "light")
    root?.setAttribute('data-theme', theme === "dark" ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    root?.classList.remove('dark', 'light');
    root?.classList.add(theme === "dark" ? "light" : "dark");
    root?.setAttribute('data-theme', theme === "dark" ? "light" : "dark");
  };

  return (
    <button onClick={toggleTheme} className="theme-toggle">
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
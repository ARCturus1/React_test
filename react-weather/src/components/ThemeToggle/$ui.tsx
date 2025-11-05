import { Sun, Moon } from "lucide-react";
import { useThemeContext } from "../../contexts/ThemeContext";
import "./ThemeToggle.css";
import { useEffect } from "react";

const root = document.getElementById('root');

export default function ThemeToggle() {
  const { theme, setTheme } = useThemeContext();

  useEffect(() => {
    root?.classList.add(theme === "dark" ? "dark-mode" : "light-mode");
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    root?.classList.remove('dark-mode', 'light-mode');
    root?.classList.add(theme === "dark" ? "light-mode" : "dark-mode");
  };

  return (
    <button onClick={toggleTheme} className="theme-toggle">
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
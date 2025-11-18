import ThemeToggle from "../ThemeToggle";

/**
 * Header component for the Weather App
 * 
 * This component renders the application header with:
 * - A title "Weather App" 
 * - A theme toggle button for switching between light and dark modes
 * - Responsive layout using Tailwind CSS classes
 * 
 * The header is styled with flexbox to justify content between the title and theme toggle,
 * with padding and center alignment for visual consistency.
 * 
 * @returns {JSX.Element} The Header component JSX
 */
export function Header() {
  return (
    <header className="header flex justify-between items-center p-4">
      <div className="text-lg font-semibold">Weather App</div>
      <ThemeToggle />
    </header>
  );
}

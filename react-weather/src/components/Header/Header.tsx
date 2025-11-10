import ThemeToggle from "../ThemeToggle";

export function Header() {
  return (
    <header className="header flex justify-between items-center p-4">
      <div className="text-lg font-semibold">Weather App</div>
      <ThemeToggle />
    </header>
  );
}

export default Header;

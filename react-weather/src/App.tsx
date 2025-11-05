import "./App.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Router } from "./router";
import Header from "./components/Header/Header";

function App() {
  return (
    <ThemeProvider>
      <>
        <Header />
        <Router />
      </>
    </ThemeProvider>
  );
}

export default App;

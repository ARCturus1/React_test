import "./App.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Router } from "./router";
import Header from "./components/Header";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <>
          <Header />
          <Router />
        </>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

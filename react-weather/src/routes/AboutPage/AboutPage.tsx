import "./styles.css";

/**
 * Renders the "About" page for the Weather App.
 * Displays information about the application, its features, and the technology stack used.
 * @returns {JSX.Element} The rendered AboutPage component.
 */
export function AboutPage() {
  return (
    <div className="about-page-container">
      <h1 className="text-blue-400 dark:text-amber-500">Weather App</h1>
      <p>Welcome to the Weather App - your reliable source for current weather information.</p>
      <h2>About This Application</h2>
      <p>This application provides real-time weather data for cities around the world. It uses the Open-Meteo API to fetch accurate weather information including temperature, wind speed, and weather conditions.</p>
      <h2>Features</h2>
      <ul>
        <li>Real-time weather updates</li>
        <li>Current weather conditions</li>
        <li>Wind speed and direction data</li>
        <li>Temperature information</li>
        <li>Responsive design for all devices</li>
      </ul>
      <h2>Technology Stack</h2>
      <p>This application is built with:</p>
      <ul>
        <li>React.js - for building the user interface</li>
        <li>TypeScript - for type safety</li>
        <li>Vite - for fast development</li>
        <li>Ant Design - for UI components</li>
        <li>Open-Meteo API - for weather data</li>
      </ul>
    </div>
  );
}

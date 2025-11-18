import { useLocation } from "react-router-dom";
import "./styles.css";
import CityWeather from "../../components/CitiesList/components/CityWeather";
import ErrorPage from "../ErrorPage";

/**
 * CityDetails component
 * This component handles the display of city weather details
 * It extracts location parameters from the URL and passes them to the CityWeather component
 */
export function CityDetails() {
  // Get the current location object from react-router-dom
  const location = useLocation();
  
  // Create URLSearchParams object from the location search string
  const params = new URLSearchParams(location.search);
  
  // Extract latitude from URL parameters, converting to number
  const lat = params.get("lat");
  
  // Extract longitude from URL parameters, defaulting to undefined if not present
  const lon = params.get("lon") || undefined;
  
  // Extract city name from URL parameters, defaulting to undefined if not present
  const cityName = params.get("cityName") || undefined;
  
  // Extract country code from URL parameters, defaulting to undefined if not present
  const countryCode = params.get("countryCode") || undefined;

  // Validate that both latitude and longitude are present
  if (!lat || !lon) {
    return <ErrorPage />;
  }

  // Convert string values to numbers for latitude and longitude
  const latitude = Number(lat);
  const longitude = Number(lon);

  // Validate that latitude and longitude are valid numbers
  if (isNaN(latitude) || isNaN(longitude)) {
    return <ErrorPage />;
  }

  // Render the CityWeather component with extracted parameters
  return (
    <CityWeather
      location={{ latitude, longitude }}
      countryCode={countryCode}
      cityName={cityName}
    />
  );
}

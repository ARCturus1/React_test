import { cityByCoords } from "../../api/city.api";
import { API } from "../../api/keys";
import CityWeather from "../../components/CitiesList/components/CityWeather";
import { useLocationContext } from "../../contexts/LocationContext";
import { useFetch } from "../../hooks/fetch";
import NotFound from "../NotFound";
import "./styles.css";
import Spiner from "../../shared/components/Spiner";

import type { CityData } from "../../models/CityWeatherData";

/**
 * MainPage component displays weather information for the user's current location.
 * It fetches weather data using the user's coordinates and shows appropriate UI based on loading state, errors, or available data.
 */
export function MainPage() {
  // Get user's current location (coordinates) from context
  const location = useLocationContext();

  // Check if user has provided a valid location; if not, show NotFound page
  if (!location) {
    return <NotFound />;
  }

  // Fetch weather data using cityByCoords API with user's coordinates
  const { data: citiesData, error, loading } = useFetch<CityData[]>(
    [location.latitude, location.longitude],
    cityByCoords(location),
    {
      headers: { "X-Api-Key": API.ninjas },
    }
  );

  // Display error message to user when API request fails
  if (error) {
    return <div className="error">Failed to load weather data: {String(error)}</div>;
  }

  const currentCity = citiesData?.[0];

  // Show loading spinner while waiting for weather data
  if (loading) {
    return <Spiner />;
  }

  // Handle case where no weather data is returned for the current location
  if (!currentCity) {
    return <div className="no-data">No weather data available for this location.</div>;
  }

  return (
    <CityWeather
      location={location}
      cityName={currentCity.name}
      countryCode={currentCity.country}
    />
  );
}

import { useLocation } from "react-router-dom";
import "./styles.css";
import CityWether  from "../../components/CitiesList/components/CityWeather";
import ErrorPage from "../ErrorPage";

export function CityDetails() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const lat = params.get("lat");
  const lon = params.get("lon") || undefined; // Corrected variable name from 'lon' to 'lon'
  const cityName = params.get("cityName") || undefined;
  const countryCode = params.get("countryCode") || undefined;

  return !lat || !lon ? (
    <ErrorPage />
  ) : (
    <CityWether
      location={{ latitude: +lat, longitude: +lon }} // Convert string values to numbers
      countryCode={countryCode}
      cityName={cityName}
    />
  );
}

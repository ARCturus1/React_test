import { useLocation } from "react-router-dom";
import "./styles.css";
import CityWether  from "../../components/CitiesList/components/CityWeather";
import ErrorPage from "../ErrorPage";

export function CityDetails() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const lat = params.get("lat");
  const lon = params.get("lat");
  const cityName = params.get("cityName") || undefined;
  const countryCode = params.get("countryCode") || undefined;

  return !lat || !lon ? (
    <ErrorPage />
  ) : (
    <CityWether
      location={{ latitude: +lat, longitude: +lon }}
      countryCode={countryCode}
      cityName={cityName}
    />
  );
}

import { cityByCoords } from "../../api/city.api";
import { API } from "../../api/keys";
import CityWeather from "../../components/CitiesList/components/CityWeather";
import { useLocationContext } from "../../contexts/LocationContext";
import { useFetch } from "../../hooks/fetch";
import NotFound from "../NotFound";
import "./styles.css";
import Spiner from "../../shared/components/Spiner";
import type { CityData } from "../../models/CityWeatherData";

export function MainPage() {
  // Get user's current location for weather data
  const location = useLocationContext();

  // Fetch weather data using user's coordinates from city.api
  const { data, error, loading } = useFetch<CityData[]>(
    [location?.latitude, location?.longitude],
    cityByCoords(location!),
    {
      headers: { "X-Api-Key": API.ninjas },
    }
  );

  if (error) {
    throw new Error(error);
  }

  const currentCity = (data && data[0]) || undefined;

  return location ? (
    loading ? (
      <Spiner />
    ) : (
      <CityWeather
        location={location}
        cityName={currentCity?.name}
        countryCode={currentCity?.country}
      />
    )
  ) : (
    <NotFound />
  );
}

export default MainPage;

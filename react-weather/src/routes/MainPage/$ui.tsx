
import { cityByCoords } from "../../api/city.api";
import { API } from "../../api/keys";
import { CityWether } from "../../components/CitiesList/components/CityWether";
import { useLocationContext } from "../../contexts/LocationContext";
import { useFetch } from "../../hooks/fetch";
import NotFound from "../NotFound/$ui";
import "./styles.css";
import Spiner from "../../shared/components/spiner";

export function MainPage() {
  const location = useLocationContext();

  const { data, error, loading } = useFetch(
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
      <CityWether
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

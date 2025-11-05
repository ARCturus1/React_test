import { getWhetherUrlByLocation } from "../../../../api/whether.api";
import {
  getIconForWeatherCode,
  getWhetherDescriptionByData,
} from "../../../../utils/wetherCodes";
import { useFetch } from "../../../../hooks/fetch";
import getWindDirection from "../../../../utils/windDirection";
import SvgImage from "../../../SvgImage";
import WetherDataItem from "../../../WhetherDataItem";
import type { CityWheterModel } from "./model";
import "./styles.css";

export function CityWether({
  location,
  cityName,
  countryCode,
}: CityWheterModel) {
  const {
    data: weatherData,
    error,
    loading,
  } = useFetch([], getWhetherUrlByLocation(location));

  const timeConvert = (data: string) => {
    return new Date(data).toLocaleDateString();
  };

  const temperatureView = (temperature: number, unit: string) => {
    return (temperature > 0 ? "+" : "") + `${temperature} ${unit}`;
  };

  return (
    <>
      {weatherData ? (
        <div className="max-w-sm mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden p-6 flex items-center space-x-4 text-gray-900 dark:text-gray-100">
          <div className="text-5xl">
            {getIconForWeatherCode(weatherData.current.weather_code)}
          </div>
          <div>
            {countryCode && (
              <SvgImage
                countryCode={countryCode}
                className="text-3xl flex-shrink-0"
              />
            )}
            {cityName && <h2 className="text-xl font-semibold">{cityName}</h2>}
            <p className="text-3xl font-bold"></p>
            <p className="text-gray-600 dark:text-gray-300">
              {getWhetherDescriptionByData(weatherData.current.weather_code)}
            </p>
            {temperatureView(
              weatherData.current.temperature_2m,
              weatherData.current_units.temperature_2m
            )}
            <div className="mt-2 flex items-center text-sm">
              <span className="mr-2">💨</span>
              <span>
                {getWindDirection(weatherData.current.wind_direction_10m)},{" "}
                {weatherData.current.wind_speed_10m}{" "}
                {weatherData.current_units.wind_speed_10m}
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </>

    // <>
    //   {weatherData ? (
    //     <div className="current-weather-container">
    //       <WhetherDataItem
    //         title={getWhetherDescriptionByData(
    //           weatherData.current.weather_code
    //         )}
    //       />

    //       <WhetherDataItem
    //         title="Time"
    //         value={timeConvert(weatherData.current.time)}
    //       />

    //       <WhetherDataItem
    //         title="Wind Speed"
    //         value={weatherData.current.wind_speed_10m}
    //         unit={weatherData.current_units.wind_speed_10m}
    //       />

    //       <WhetherDataItem
    //         title="Wind Direction"
    //         value={weatherData.current.wind_direction_10m}
    //         unit={weatherData.current_units.wind_direction_10m}
    //       />

    //       <WhetherDataItem
    //         title="Wind Gusts"
    //         value={weatherData.current.wind_gusts_10m}
    //         unit={weatherData.current_units.wind_gusts_10m}
    //       />

    //       <WhetherDataItem
    //         title="Temperature"
    //         value={weatherData.current.temperature_2m}
    //         unit={weatherData.current_units.temperature_2m}
    //       />
    //     </div>
    //   ) : null}
    // </>
  );
}

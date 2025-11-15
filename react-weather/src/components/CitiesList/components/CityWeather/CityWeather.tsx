import { getWeatherUrlByLocation } from "../../../../api/weather.api";
import {
  getIconForWeatherCode,
  getWeatherDescriptionByData,
} from "../../../../utils/weatherCodes";
import { useFetch } from "../../../../hooks/fetch";
import getWindDirection from "../../../../utils/windDirection";
import SvgFlagImage from "../../../SvgFlagImage";
import type { CityWeatherModel, WeatherDataModel } from "./model";
import "./styles.css";
import Spiner from "../../../../shared/components/Spiner";

/**
 * Component to display weather data for a specific city.
 * @param location - The location for which to fetch weather data.
 * @param cityName - The name of the city.
 * @param countryCode - The country code for the city.
 * @returns JSX element displaying weather data.
 */
export function CityWeather({
  location,
  cityName,
  countryCode,
}: CityWeatherModel) {
  /**
   * Fetches weather data for the given location.
   * @returns Object containing weather data, error, and loading state.
   */
  const {
    data: weatherData,
    error,
    loading,
  } = useFetch<WeatherDataModel>([], getWeatherUrlByLocation(location));

  /**
   * Handles errors by throwing an error with the error message.
   * @param error - The error message.
   */
  if (error) {
    throw new Error(error);
  }

  /**
   * Converts a timestamp to a human-readable date string.
   * @param data - The timestamp to convert.
   * @returns Human-readable date string.
   */
  const timeConvert = (data: string) => {
    return new Date(data).toLocaleDateString();
  };

  /**
   * Formats temperature with a plus sign if positive.
   * @param temperature - The temperature value.
   * @param unit - The unit of temperature.
   * @returns Formatted temperature string.
   */
  const temperatureView = (temperature: number, unit: string) => {
    return (temperature > 0 ? "+" : "") + `${temperature} ${unit}`;
  };

  return (
    <>
      {weatherData ? (
        <div className="weather-data max-w-sm mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden p-6 flex items-center space-x-4 text-gray-900 dark:text-gray-100">
          <div className="text-5xl">
            {getIconForWeatherCode(weatherData.current.weather_code)}
          </div>
          <div>
            {weatherData.current.time && (
              <p className="text-xl font-semibold pb-1.5">
                {timeConvert(weatherData.current.time)}
              </p>
            )}
            {countryCode && (
              <SvgFlagImage
                countryCode={countryCode}
                className="text-3xl flex-shrink-0"
              />
            )}
            {cityName && <h2 className="text-xl font-semibold">{cityName}</h2>}
            <p className="text-3xl font-bold"></p>
            <p className="text-gray-600 dark:text-gray-300">
              {getWeatherDescriptionByData(weatherData.current.weather_code)}
            </p>
            {temperatureView(
              weatherData.current.temperature_2m,
              weatherData.current_units.temperature_2m
            )}
            {weatherData.current.wind_direction_10m && (
              <>
                <div className="mt-2 flex items-center text-sm">
                  <span className="mr-2">💨</span>
                  <span>
                    {getWindDirection(weatherData.current.wind_direction_10m)},{" "}
                    {weatherData.current.wind_speed_10m}{" "}
                    {weatherData.current_units.wind_speed_10m}
                  </span>
                </div>
                <div className="mt-2 flex items-center text-sm">
                  <span className="mr-2">🌪️</span>
                  <span>
                    {getWindDirection(weatherData.current.wind_direction_10m)},{" "}
                    {weatherData.current.wind_gusts_10m}{" "}
                    {weatherData.current_units.wind_gusts_10m}
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      ) : loading ? (
        <Spiner />
      ) : null}
    </>
  );
}

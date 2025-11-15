import type { LocationModel } from "../../../../models/LocationModel";

/**
 * Model for weather data for a city.
 * @property {string} current.time - Time of the current observation.
 * @property {number} current.temperature_2m - Temperature at ground level.
 * @property {string} current_units.temperature_2m - Unit of measurement for temperature.
 * @property {number} current.weather_code - Weather code.
 * @property {number} current.wind_direction_10m - Wind direction at 10 meters.
 * @property {number} current.wind_speed_10m - Wind speed at 10 meters.
 * @property {string} current_units.wind_speed_10m - Unit of measurement for wind speed.
 * @property {number} current.wind_gusts_10m - Maximum wind gusts at 10 meters.
 * @property {string} current_units.wind_gusts_10m - Unit of measurement for wind gusts.
 */
export interface WeatherDataModel {
  current_units: {
    temperature_2m: string;
    wind_speed_10m: string;
    wind_gusts_10m: string;
  };
  current: {
    time: string;
    temperature_2m: number;
    weather_code: number;
    wind_direction_10m: number;
    wind_speed_10m: number;
    wind_gusts_10m: number;
  };
}

/**
 * Model for city data.
 * @property {LocationModel} location - Location model.
 * @property {string} countryCode - Country code.
 * @property {string} cityName - City name.
 */
export interface CityWeatherModel {
  location: LocationModel;
  countryCode?: string;
  cityName?: string;
}

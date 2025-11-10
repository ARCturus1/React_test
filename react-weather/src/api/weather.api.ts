import type { LocationModel } from "../models/LocationModel";

export function getWeatherUrlByLocation(location: LocationModel): string {
  return `https://api.open-meteo.com/v1/forecast?latitude=${location?.latitude}&longitude=${location?.latitude}&current=temperature_2m,wind_speed_10m,weather_code,wind_direction_10m,wind_gusts_10m`;
}

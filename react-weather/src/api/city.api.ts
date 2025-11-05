import type { LocationModel } from "../models/LocationModel";

export function cityByCoords(location: LocationModel): string {
  return `https://api.api-ninjas.com/v1/reversegeocoding?lat=${location.latitude}&lon=${location.longitude}`;
}

export function citiesListBySearchText(search: string): string {
  return `https://geocoding-api.open-meteo.com/v1/search?name=${search}&count=50&language=en&format=json`;
}

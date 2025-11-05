import type { LocationModel } from "../../../../models/LocationModel";

export interface CityWheterModel {
  location: LocationModel;
  countryCode?: string;
  cityName?: string;
}

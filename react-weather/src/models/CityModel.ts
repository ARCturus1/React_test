/**
 * Represents a city with weather data for the weather application.
 *
 * @property id - Unique identifier for the city (e.g., from API)
 * @property name - Name of the city
 * @property latitude - Latitude of the city
 * @property longitude - Longitude of the city
 * @property elevation - Elevation of the city
 * @property feature_code - Feature code (e.g., "PPL")
 * @property country_code - Country code (e.g., "PG")
 * @property admin1_id - Admin1 ID
 * @property timezone - Timezone (e.g., "Pacific/Port_Moresby")
 * @property country_id - Country ID
 * @property country - Country name
 * @property admin1 - Admin1 name
 */
export interface CityModel {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  elevation: number;
  feature_code: string;
  country_code: string;
  admin1_id: string;
  timezone: string;
  country_id: string;
  country: string;
  admin1: string;
}

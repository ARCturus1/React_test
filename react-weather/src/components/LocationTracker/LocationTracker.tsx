import { useState, useEffect, type PropsWithChildren } from "react";
import type { LocationModel } from "../../models/LocationModel";
import { LocationContext } from "../../contexts/LocationContext";

/**
 * LocationTracker Component
 * 
 * This component uses the browser's geolocation API to retrieve the user's current
 * geographical location (latitude and longitude). It manages the location state
 * and provides it through a React context for use throughout the application.
 * 
 * Features:
 * - Uses useEffect to fetch location on component mount
 * - Handles geolocation errors gracefully
 * - Provides fallback UI when location is unavailable
 * - Updates context with location data when available
 * 
 * The component uses the LocationContext to make location data available
 * to child components via React's context API.
 * 
 * @param props.children - The child components that will receive location data
 */
export function LocationTracker(props: PropsWithChildren) {
  const [location, setLocation] = useState<LocationModel | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (err) => {
          setError(err.message);
        },
        { enableHighAccuracy: true, maximumAge: 0 }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  }, []);

  return (
    <>
      {location ? (
        <LocationContext.Provider
          value={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
        >
          {props.children}
        </LocationContext.Provider>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <p>Getting location...</p>
      )}
    </>
  );
}

import { useState, useEffect, type PropsWithChildren } from "react";
import type { LocationModel } from "../../models/LocationModel";
import { LocationContext } from "../../contexts/LocationContext";

export function LocationTracker(props: PropsWithChildren) {
  const [location, setLocation] = useState<LocationModel | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
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

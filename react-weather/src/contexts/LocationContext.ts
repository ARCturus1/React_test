import { createContext, useContext } from "react";
import type { LocationModel } from "../models/LocationModel";

export const LocationContext = createContext<LocationModel | null>(null);
export const useLocationContext = () => {
    return useContext<LocationModel | null>(LocationContext);
};

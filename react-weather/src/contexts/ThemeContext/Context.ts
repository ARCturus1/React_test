import { createContext } from "react";
import type { ThemeModel } from "./model";

export const ThemeContext = createContext<ThemeModel | null>(null);
